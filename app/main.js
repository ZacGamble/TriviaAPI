import { HardQuestionController } from "./Controllers/HardQuestionController.js";
import { QuestionController } from "./Controllers/QuestionController.js";

class App {
  
  questionController = new QuestionController();
  hardQuestionController = new HardQuestionController()
}

window["app"] = new App();
