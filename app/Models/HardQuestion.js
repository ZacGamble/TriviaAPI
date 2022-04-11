export class HardQuestion{
    constructor(data){
        this.question = data.question
        this.answer = data.correct_answer
        this.wrongAnswer = data.incorrect_answers
    }
}