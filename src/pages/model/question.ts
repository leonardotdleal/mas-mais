import * as models from './models';

export interface Question {
    id: number;

    question: string;

    answer: Question.AnswerEnum;

}
export namespace Question {
    export enum AnswerEnum {
        mas = <any> 'mas',
        mais = <any> 'mais'
    }
}
