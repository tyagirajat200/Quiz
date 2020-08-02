import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

const headers = {
  'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
  'content-type': 'application/json'
}

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http :HttpClient) { }
  url = environment.apiUrl
   
  getQuiz()
  {
    return this.http.get(this.url + '/api/quiz/all' , {headers})
  }
  getQuestions(id)
  {
    return this.http.get(this.url+'/api/quiz-questions/all/'+id , {headers})
  }

  postAnswers(data)
  {
    return this.http.post(this.url+'/api/user/quiz-score',data, {headers})
  }

}
