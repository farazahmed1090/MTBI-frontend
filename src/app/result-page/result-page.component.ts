import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  result1 = true
  result2 = false
  result3 = false
  result4 = false
  result5 = false
  result6 = false
  result7 = false
  loader = false
  userID: any = null
  perType: any = null
  perTitle: any = null
  perDes: any = null
  form: FormGroup;
  // email :any = null
  constructor(private router : Router,private userService :UserServiceService,private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    let userID = localStorage.getItem('userID')
    if (userID) {
      this.router.navigate(['/result-page'])
    } else {
      this.router.navigate([''])

    }
   }

  ngOnInit(): void {
    this.userID = localStorage.getItem('userID')
    this.getScore()
  }
  getScore(){
    this.userService.calculate_scores(this.userID).subscribe(res => {
      console.log('result', res)
      let response :any = res
      if(response.status === "successful" ){

         this.perType = response.personality_type
         this.perTitle = response.personality_title
        //  this.perTitle = 'nesty'
         this.perDes = response.personality_description

      }
    })
  }
  reTest(){
    Swal.fire({
      title: "Are you sure?",
      text: "You want to retake this test",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Retake !"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete_user_responses(this.userID).subscribe(res=>{
          console.log(res)
          let resp :any = res
          if(resp.success){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: resp.message,
              showConfirmButton: false,
              timer: 1000
            });
            setTimeout(() => {
             this.router.navigate(['/home']) 
            }, 1000);
          }
        })
      }
    });
   
  }
  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userID')
        window.location.reload()
      }
    });
  }
  sendPersonalityEmail(){
    this.loader = true
    if(this.form.controls['email'].invalid){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email is Wrong",
      });
      return
    }

    let _payload = {
      userID: this.userID,
      email: this.form.controls['email'].value
    }
    console.log('payload of email',_payload)
      this.userService.send_personality_email(_payload).subscribe(res=>{
      if(res.success){
        this.loader = false
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        this.loader = false
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        });

      }
    })
  }

  nextTab() {
    
    if (this.result1) {
      this.result1 = false
      this.result7 = true
      return;
    }
    // if (this.result2) {
    //   this.result2 = false
    //   this.result3 = true
    //   return;
    // }
    // if (this.result3) {
    //   this.result3 = false
    //   this.result4 = true
    //   return;
    // }
    // if (this.result4) {
    //   this.result4 = false
    //   this.result5 = true
    //   return;
    // }
    // if (this.result5) {
    //   this.result5 = false
    //   this.result6 = true
    //   return;
    // }
    // if (this.result1) {
    //   this.result6 = false
    //   this.result7 = true
    //   return;
    // }
    // if(this.result7){
    //   this.router.navigate(['/types-detail'])
    // }
  }
  get email() {
    return this.form.get('email');
  }
  backTab() {
    if (this.result7) {
      this.result7 = false
      this.result1 = true
      return;
    }
    // if (this.result6) {
    //   this.result6 = false
    //   this.result5 = true
    //   return;
    // }
    // if (this.result5) {
    //   this.result5 = false
    //   this.result4 = true
    //   return;
    // }
    // if (this.result4) {
    //   this.result4 = false
    //   this.result3 = true
    //   return;
    // }
    // if (this.result3) {
    //   this.result3 = false
    //   this.result2 = true
    //   return;
    // }
    // if (this.result2) {
    //   this.result2 = false
    //   this.result1 = true
    //   return;
    // }
  }

  onTabClick(tab: any) {
    if (tab === 'result1') {
      this.result1 = true
      this.result2 = false
      this.result3 = false
      this.result4 = false
      this.result5 = false
      this.result6 = false
      this.result7 = false

    }
    if (tab === 'result2') {
      this.result1 = false
      this.result2 = true
      this.result3 = false
      this.result4 = false
      this.result5 = false
      this.result6 = false
      this.result7 = false

    }
    if (tab === 'result3') {
      this.result1 = false
      this.result2 = false
      this.result3 = true
      this.result4 = false
      this.result5 = false
      this.result6 = false
      this.result7 = false

    }
    if (tab === 'result4') {
      this.result1 = false
      this.result2 = false
      this.result3 = false
      this.result4 = true
      this.result5 = false
      this.result6 = false
      this.result7 = false

    }
    if (tab === 'result5') {
      this.result1 = false
      this.result2 = false
      this.result3 = false
      this.result4 = false
      this.result5 = true
      this.result6 = false
      this.result7 = false

    }
    if (tab === 'result6') {
      this.result1 = false
      this.result2 = false
      this.result3 = false
      this.result4 = false
      this.result5 = false
      this.result6 = true
      this.result7 = false

    }
    if (tab === 'result7') {
      this.result1 = false
      this.result2 = false
      this.result3 = false
      this.result4 = false
      this.result5 = false
      this.result6 = false
      this.result7 = true

    }
  }

}
