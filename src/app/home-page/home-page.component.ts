import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(private router: Router, private userService: UserServiceService) {


    let userID = localStorage.getItem('userID')
    if (userID) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate([''])

    }
  }
  progressBar = "10%";
  startind = 0;
  disableDiv = true;

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
  answersArr: answers[] = []

  questionForm = new FormGroup({
    answer: new FormControl(''),
  })

  pushNextRecords(currentArray: any, recordsToPush: number) {
    // if(this.allQuestions.length === this.startind){
    //   return
    // }
    if (currentArray.length > 0) {
      this.startind = this.startind + recordsToPush
      if (this.startind === 7) {
        this.progressBar = '20%'
      }
      if (this.startind === 14) {
        this.progressBar = '30%'
      }
      if (this.startind === 21) {
        this.progressBar = '40%'
      }
      if (this.startind === 28) {
        this.progressBar = '50%'
      }
      if (this.startind === 35) {
        this.progressBar = '60%'
      }
      if (this.startind === 42) {
        this.progressBar = '70%'
      }
      if (this.startind === 49) {
        this.progressBar = '80%'
      }
      if (this.startind === 56) {
        this.progressBar = '90%'
      }
      if (this.startind === 63) {
        this.progressBar = '100%'
      }
    }
    let startIndex = this.startind;
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
    // this.progressBar = '50%'
    //  let arr  = this.questionsArr.filter(ser => ser.QID === 24)
    // if(arr.length > 0){
    //   this.arrLenght = this.arrLenght + 1
    // }
    this.pushNextRecords(this.showQuestions, 5)
    console.log('new arr push  ', this.showQuestions)
    // if(this.arrLenght == 2){
    //   this.router.navigate(['/result-page'])
    // }
  }
  // Example usage: Push the first 10 records
  ngOnInit(): void {
    this.getAllQuestions()
  }
  change(event: any, QID: any) {
    this.disableDiv = false
    // console.log(this.questionForm.controls['answer'].value)
    let alreadyExist = this.answersArr.findIndex(obj => obj.question_id == QID)
    if (alreadyExist != -1) {
      this.answersArr.splice(alreadyExist, 1)
    }
    let ansID = event.target.value

    const answerObj = {
      question_id: QID,
      answer_id: ansID
    }
    this.answersArr.push(answerObj)

    const _payload = {
      user_id: localStorage.getItem('userID'),
      responses: this.answersArr
    }
    this.userService.save_user_responses(_payload).subscribe((res: any) => {
      console.log('save data ', res)
    })

  }
  getAllQuestions() {
    this.userService.get_personality_questions().subscribe((res: any) => {
      console.log('res', res)
      for (let i = 0; i < res.length; i++) {
        this.allQuestions.push(res[i])
      }
      // this.showQuestions = this.allQuestions
      console.log('all questions', this.allQuestions)
      this.pushNextRecords(this.showQuestions, 7)

    })
  }
  submit() {
    if (this.allQuestions.length === this.startind + 7) {

      this.userService.calculate_scores(localStorage.getItem('userID')).subscribe(res=>{
        console.log('result',res)
      })

    } else {
      this.pushNextRecords(this.showQuestions, 7)

      window.scrollTo(0, 0)
    }

  }
  changeColor() {
    const circle = document.querySelector('.circle') as HTMLElement;
    const currentColor = circle.style.backgroundColor;

    circle.style.backgroundColor = currentColor === 'blue' ? 'red' : 'blue';
  }

}
interface IQuestions {
  question_id: any;
  question_text: any;
  choices: Choice[];
}
interface Choice {
  answer_id: any;
  question_id: any;
  answer_text: any;
}
interface IQuestinsPayload {
  user_id: any;
  responses: answers[];
}
interface answers {
  question_id: any,
  answer_id: any
}

