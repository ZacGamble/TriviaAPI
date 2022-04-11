import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";
import { Question } from "../Models/Question.js";
import {Pop} from "../Utils/Pop.js"

function _drawQuestions(){
    let template = ''
    ProxyState.questions.forEach(q => template += `
    <li class="shadow border m-3 p-3">${q.question}
    <div class="d-flex flex-column"
    <span>
    <button onclick="app.questionController.answeredTrue('')" class="btn btn-success m-3 border shadow" style="max-width: 40%;">${q.answer}
   
    </span>
    </div>
    </li>
    `)
    document.getElementById('trivia').innerHTML = template
    
}
export class QuestionController{
    constructor(){
        this.getQuestions()
        ProxyState.on('questions', _drawQuestions)
        _drawQuestions
    }
    answeredTrue(){
       questionService.answeredTrue()
    }
    answeredFalse(){
       questionService.answeredFalse()
    }
    async getQuestions(){
        try {
            await questionService.getQuestions()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error);
        }
    }
}

