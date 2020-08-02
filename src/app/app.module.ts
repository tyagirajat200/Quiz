import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayQuizzesComponent } from './display-quizzes/display-quizzes.component';
import { QuestionComponent } from './question/question.component';
import {  FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuizzesComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
