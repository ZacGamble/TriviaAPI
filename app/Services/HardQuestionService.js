import { ProxyState } from "../AppState.js"
import { HardQuestion } from "../Models/HardQuestion.js"

class HardQuestionService{
    constructor(){
        this.getHardQuestions()
    }
   async getHardQuestions() {
        // @ts-ignore axios
        const response = await axios.get('https://opentdb.com/api.php?amount=10')
        console.log('hard questions',response);
        ProxyState.hardQuestions = response.data.results.map(h => new HardQuestion(h))
    }

}

export const hardQuestionService = new HardQuestionService()