import * as models from './models';

export interface Question {
    id: number;

    description: string;

    answer: Question.AnswerEnum;

}

export namespace Question {
    export enum AnswerEnum {
        mas = <any> 'mas',
        mais = <any> 'mais'
    }
}
