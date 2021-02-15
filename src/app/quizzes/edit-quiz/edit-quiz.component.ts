import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService } from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';

@Component({
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quizToEdit: Quiz;
  public quizId: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public quizService: QuizService,
  ) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizId = id;
    console.log('Id récupéré:');
    console.log(id);
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quizToEdit = quiz);
  }
}
