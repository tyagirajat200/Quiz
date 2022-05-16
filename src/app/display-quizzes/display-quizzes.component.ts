import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-display-quizzes",
  templateUrl: "./display-quizzes.component.html",
  styleUrls: ["./display-quizzes.component.css"],
})
export class DisplayQuizzesComponent implements OnInit {
  constructor(private data: DataService,private router  :Router) {}

 public quiz :any =[]

  ngOnInit() {
    this.data.getQuiz().subscribe(
      (res :any) => {
        this.quiz = res
      },
      (err) => console.log("Some Error")
    );
  }
}
