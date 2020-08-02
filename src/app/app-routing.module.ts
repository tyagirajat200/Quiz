import { QuestionComponent } from './question/question.component';
import { DisplayQuizzesComponent } from './display-quizzes/display-quizzes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DisplayQuizzesComponent,
  },
  {
    path: 'quiz/:id',
    component: QuestionComponent,
  },
  {
    path:'**',
    component : DisplayQuizzesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
