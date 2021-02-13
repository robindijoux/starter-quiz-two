import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme: string;
    id: number;
    questions: Question[];
    creationDate?: Date;
}
