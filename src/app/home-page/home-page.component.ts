import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router : Router ,private userService : UserServiceService) {
    let userID = localStorage.getItem('userID')
    if(userID){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate([''])

    }
  }
  progressBar = "20%"; 
  arrLenght = 1
  allQuestionsArr = [
    {
      QID: 1,
      Question: 'Your Regularly Make New Friends',
      Options: { optionA: 'one', optionB: 'two' }
    },
    { QID: 16, Question: 'What is your favorite hobby?', Options: { optionA: 'Reading', optionB: 'Traveling' } },
    { QID: 17, Question: 'How do you like to spend your weekends?', Options: { optionA: 'Watching movies', optionB: 'Outdoor activities' } },
    { QID: 18, Question: 'Do you prefer coffee or tea?', Options: { optionA: 'Coffee', optionB: 'Tea' } },
    { QID: 19, Question: 'Which season do you like the most?', Options: { optionA: 'Spring', optionB: 'Autumn' } },
    { QID: 20, Question: 'What is your favorite type of cuisine?', Options: { optionA: 'Italian', optionB: 'Asian' } },
    { QID: 21, Question: 'Do you enjoy playing sports?', Options: { optionA: 'Yes', optionB: 'No' } },
    { QID: 22, Question: 'What kind of books do you like to read?', Options: { optionA: 'Fiction', optionB: 'Non-fiction' } },
    { QID: 23, Question: 'How do you stay active?', Options: { optionA: 'Gym workouts', optionB: 'Outdoor activities' } },
    { QID: 24, Question: 'What is your preferred mode of transportation?', Options: { optionA: 'Car', optionB: 'Public transport' } },
    { QID: 25, Question: 'Do you enjoy cooking?', Options: { optionA: 'Yes', optionB: 'No' } },
    { QID: 26, Question: 'If you could travel anywhere, where would you go?', Options: { optionA: 'Beach resort', optionB: 'Mountain retreat' } },
    { QID: 27, Question: 'What is your favorite movie genre?', Options: { optionA: 'Action', optionB: 'Comedy' } },
    { QID: 28, Question: 'Do you have any pets?', Options: { optionA: 'Yes', optionB: 'No' } },
    { QID: 29, Question: 'What is your go-to workout routine?', Options: { optionA: 'Running', optionB: 'Weightlifting' } },
    { QID: 30, Question: 'How do you unwind after a long day?', Options: { optionA: 'Reading a book', optionB: 'Watching TV shows' } },
    { QID: 31, Question: 'Are you a morning person or a night owl?', Options: { optionA: 'Morning person', optionB: 'Night owl' } },
    { QID: 32, Question: 'What is your favorite type of music?', Options: { optionA: 'Pop', optionB: 'Rock' } },
    { QID: 33, Question: 'Do you prefer working from home or in an office?', Options: { optionA: 'Home', optionB: 'Office' } },
    { QID: 34, Question: 'What is your favorite holiday destination?', Options: { optionA: 'Paris', optionB: 'Tokyo' } },
    { QID: 35, Question: 'Do you enjoy gardening?', Options: { optionA: 'Yes', optionB: 'No' } },
  ]
  allQuestions: IQuestions[] = []
  questionsArr: any[] = []
  showQuestions: IQuestions[] = []

  pushNextRecords(currentArray: any, recordsToPush: number) {
    let startIndex = currentArray.length;
    let endIndex = startIndex + recordsToPush;
    
    
    let newArray = [];
    for (let i = startIndex; i < endIndex && i < this.allQuestions.length; i++) {
      newArray.push(this.allQuestions[i]);
     }

    // currentArray.push(...newArray);
    currentArray.splice(0, startIndex, ...newArray);
    return currentArray;
  }
  pushNewRecord() {
    this.progressBar = '50%'
     let arr  = this.questionsArr.filter(ser => ser.QID === 24)
    if(arr.length > 0){
      this.arrLenght = this.arrLenght + 1
    }
    this.pushNextRecords(this.showQuestions, 5)
    console.log('new arr push  ', this.showQuestions)
    if(this.arrLenght == 2){
      this.router.navigate(['/result-page'])
    }
  }
  
  getAllQuestions(){
    this.userService.get_personality_questions().subscribe((res:any)=>{
      // this.showQuestions = res
      console.log('res',res)

      for(let i = 0; i < res.length;i++){
        this.allQuestions.push(res[i])
        // console.log('answer ',this.showQuestions[i].choices[i].answer_id)
      }
      this.showQuestions = this.allQuestions
      console.log('all questions',this.showQuestions)

    })
  }
  // Example usage: Push the first 10 records
  ngOnInit(): void {
    this.getAllQuestions()
    // console.log('previouse arr', this.allQuestionsArr)
    // console.log('next arr', this.pushNextRecords(this.questionsArr, 5))
  }

}
// interface IQuestions {
//   question_id: any;
//   question_text: any;
//   choices: Choice[];
// }
// interface Choice {
//   answer_id: any;
//   question_id: any;
//   answer_text: any;
// }

interface IQuestions {
  question_id: string;
  question_text: string;
  choices: Choices;
}
interface Choices {
  '2': _2;
  '3': _2;
}
interface _2 {
  answer_id: string;
  question_id: string;
  answer_text: string;
}
