import { ProxyState } from "../AppState.js"
import { hardQuestionService } from "../Services/HardQuestionService.js"
import { Pop } from "../Utils/Pop.js"

function _drawHardQuestions() {
    let template = ''
    ProxyState.hardQuestions.forEach(q => template += `
    <li class="shadow border m-3 p-3">${q.question}
    <div class="d-flex flex-column p-3">
    <span class="border on-hover p-3 m-3">
    ${q.wrongAnswer}
    ${q.answer}
    </span>
    </div>
    </li>
    `)
    document.getElementById('hard-questions').innerHTML = template
}
export class HardQuestionController {
    constructor() {
        ProxyState.on('hardQuestions', _drawHardQuestions)
        _drawHardQuestions
    }
    async getHardQuestions() {
        try {
            await hardQuestionService.getHardQuestions()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error);
        }
    }


}