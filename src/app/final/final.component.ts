import { Component, OnInit } from '@angular/core';
import {DummyService} from "../dummy.service";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  data:number=32;
  getData
  resultHtml:any;

  public constructor(private myService: DummyService) {

    this.getData = this.myService.data
    console.log(this.getData.questions)
  }


  sender(questionId:number, answerText:string){
    this.myService.logMethod(questionId,answerText);
  }


  htmlParse(data:any) {

    function faze1() {
      let html = new DOMParser().parseFromString(data,'text/html')
      let divs = html.body.querySelectorAll('div');
      let tags = [];
      for(let i = 0; i < divs.length; i++){
        tags.push({data:divs[i].outerHTML, id:i+1});
      }
      tags.splice(0,1)

      console.log(tags);
      return tags;
    }

    function faze2() {
      let html = new DOMParser().parseFromString(data,'text/html')
      let divs = html.body.querySelectorAll('span');
      let tags = [];
      for(let i = 0; i < divs.length; i++){
        tags.push({data:divs[i].outerHTML, id:i+1});
      }
      tags.splice(1,1)
      console.log(tags);
      return tags;
    }
    let htmlResult = faze2().concat(faze1())
    console.log(htmlResult)

    return htmlResult;
  }




  questionId=999;


  getQuestion(questionId:number){
    console.log(questionId)
    this.questionId=questionId;
  }
  getAnswer(answerId:number, answerText:string){
    console.log(answerId)
    this.compareAnswer(this.questionId, answerId, answerText)
  }

  compareAnswer(questionId:number,answerId:number, answerText:string){
    if (questionId == answerId){
      this.sender(questionId, answerText);
    }
  }


  ngOnInit(): void {
    this.resultHtml = this.htmlParse(this.getData.html)
  }

}
