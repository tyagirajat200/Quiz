import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit {
  constructor(private data: DataService, private router: ActivatedRoute) {}
  Qname: any;
  AllQuestions: any = [];
  CurQuestion: any;
  Options: any = [];
  index = 0;
  progress = 100;
  timeOut;
  selectAnswer = "";
  quiz_id;
  mappings = [];
  result: any;
  interval;
  i : number= 15;
  score :any
  ngOnInit() {
    this.quiz_id = this.router.snapshot.params["id"];
    this.data.getQuestions(this.quiz_id).subscribe(
      (res: any) => {
        this.AllQuestions = res.questions;
        this.Qname = res.name;
        this.setQuestion();
      },
      (err) => console.log("Some Error")
    );
  }

  setQuestion() {
    this.interval = setInterval(() => {
      this.i--;
      this.progress = (this.i / 15) * 100;
    }, 1000);
    console.log("Question No. - ", this.index + 1);
    this.CurQuestion = this.AllQuestions[this.index].name;
    this.Options = this.AllQuestions[this.index].options.split(",");
    this.timeOut = setTimeout(() => {
      this.push();
      this.selectAnswer = "";
      this.index++;
      this.i = 15;
      this.progress = 100;
      clearInterval(this.interval);
      if (this.index < this.AllQuestions.length) {
        this.setQuestion();
      } else {
        clearTimeout(this.timeOut);
        clearInterval(this.interval);
        this.postData();
      }
    }, 15000);
  }

  push() {
    this.mappings.push({
      ques_id:this.AllQuestions[this.index].id,
      submitted_option: this.selectAnswer,
    });
  }

  onClick() {
    clearTimeout(this.timeOut);
    this.push(); 
    this.selectAnswer = "";
    this.index++;
    this.i = 15;
    this.progress = 100;
    clearInterval(this.interval);
    if (this.index < this.AllQuestions.length) {
      this.setQuestion();
    } else {
      clearTimeout(this.timeOut);
      clearInterval(this.interval);
      this.postData();
    }
  }

  postData() {
    console.log({ quiz_id: this.quiz_id, mappings: this.mappings });
    
    this.data
      .postAnswers({ quiz_id: this.quiz_id, mappings: this.mappings })
      .subscribe(
        (res  :any) => {
          this.result = res;
          this.score = res.score
        },
        (err) => console.log("Some Error")
      );
  }
}
