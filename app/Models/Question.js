import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class Question{
    constructor(data){
        this.id = data.id || generateId()
        this.difficulty = data.difficulty
        this.question = data.question || ''
        this.answer = data.correct_answer
    }
    findAnswer(){
       let question = ProxyState.questions.filter(t => this.id == t.id)
        console.log(question);
    }
    get AnswerTemplate(){
        return `
        <span>${this.answer}</span>
        `
    }
}