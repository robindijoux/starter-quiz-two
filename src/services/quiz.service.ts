import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  // private quizzes: Quiz[] = QUIZ_LIST;
  private quizzes: Quiz[];

  private NEXT_ID = 0;

  /**
   * The URL to join
   */
  private url = 'https://raw.githubusercontent.com/NablaT/starter-quiz-two/master/mock-quiz.json';

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

  constructor(private http: HttpClient){
    this.getQuizzes();
  }

  getQuizzes(){
    this.http.get<Quiz[]>(this.url).subscribe((quizList) => {
      this.quizzes = quizList;
      for (const quiz of this.quizzes){
        quiz.id = this.NEXT_ID++;
      }
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz) {
    quiz.creationDate = Date();
    quiz.id = this.NEXT_ID++;
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz){
    const index: number = this.quizzes.indexOf(quiz);
    if (index !== -1){
      this.quizzes.splice(index, 1); // supprime 1 élément à la position pos
      this.quizzes$.next(this.quizzes);
    }
  }
}
