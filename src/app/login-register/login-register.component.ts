import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  
  formTitle = 'Login'
  isLoginForm = true
  defaultEmail = 'faraz@gmail.com'
  defaultPass = '12345'
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
    stdID : new FormControl(''),
    stdName : new FormControl(''),
    stdFatherName : new FormControl(''),
    stdSemester : new FormControl(''),
    stdYear : new FormControl(''),
    stdContactNumber : new FormControl(''),
  })
  
  
  constructor(private modalService: NgbModal,private router :Router ) {
  } 
  ngOnInit(): void {
  
  }

  clearForm(){
    this.loginForm.patchValue({
      email : null,
      password : null,
      stdID : null,
      stdName : null,
      stdFatherName : null,
      stdSemester : null,
      stdYear : null,
      stdContactNumber : null,
  
     })
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  submit() {
    // console.log(this.loginForm.value.email)
    if(this.loginForm.value.email  === this.defaultEmail && this.loginForm.value.password === this.defaultPass){
   this.router.navigate(['/home'])
 
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Login successfully",
    showConfirmButton: false,
    timer: 1000
  });
  //  alert('login Success')
   this.clearForm()
    }else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Invalid Credientials",
        showConfirmButton: false,
        timer: 1000
      });
      this.clearForm()
    }
  }

  navigateToForm(form:any){
    if(form === 'Login'){
      this.isLoginForm = !this.isLoginForm
      this.formTitle = "Register"
    }else{
      this.isLoginForm = !this.isLoginForm
      this.formTitle = 'Login'
    }

  }
}
