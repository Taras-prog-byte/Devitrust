import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {


  data={
      html:'<div><span>Ivan Ivanov</span><div>Country:<span>UA</span></div><div>Postcode:<b>65000</b></div></div>',
      questions:
        [
          {
            Id: 1,
            Text: 'Where is fullname?'
          },
          {
            Id: 2,
            Text: 'Where is the country?'
          },
          {
            Id: 3,
            Text: 'Where is the postcode?'
          }
        ]
    }



  logMethod(questionId:number,selectedText:string){
    console.log('service response:', 'question Id:'+questionId, 'selectedText: '+selectedText)
  }

  constructor() {
  }


}
