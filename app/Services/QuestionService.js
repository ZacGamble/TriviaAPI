import {ProxyState} from "../AppState.js"
import {Question} from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js";
class QuestionService{
    answeredTrue(thisQuestion) {
        let answeredQuestion = ProxyState.questions.find(q => q.question == thisQuestion)
        console.log('True Button returns', thisQuestion);
        if(answeredQuestion.answer == true){
            window.alert('Correct')
        }else{
            window.alert('Wrong answer')
        }
    
            
        }
    
    answeredFalse(question) {
        
    }
    async getQuestions() {
        // @ts-ignore axios
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean')
        ProxyState.questions = response.data.results.map(q => new Question(q))
        
    }
}   

export const questionService = new QuestionService()