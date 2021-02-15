import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizToDelete: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  quizSelectedId: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  deleteQuiz(){
    this.quizToDelete.emit(this.quiz);
  }

  selectQuizId() {
    this.quizSelectedId.emit(this.quiz.id);
  }

}
