import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  nextTab() {
    debugger
    if (this.result1) {
      this.result1 = false
      this.result2 = true
      return;
    }
    if (this.result2) {
      this.result2 = false
      this.result3 = true
      return;
    }
    if (this.result3) {
      this.result3 = false
      this.result4 = true
      return;
    }
    if (this.result4) {
      this.result4 = false
      this.result5 = true
      return;
    }
    if (this.result5) {
      this.result5 = false
      this.result6 = true
      return;
    }
    if (this.result6) {
      this.result6 = false
      this.result7 = true
      return;
    }
  }
  backTab() {
    if (this.result7) {
      this.result7 = false
      this.result6 = true
      return;
    }
    if (this.result6) {
      this.result6 = false
      this.result5 = true
      return;
    }
    if (this.result5) {
      this.result5 = false
      this.result4 = true
      return;
    }
    if (this.result4) {
      this.result4 = false
      this.result3 = true
      return;
    }
    if (this.result3) {
      this.result3 = false
      this.result2 = true
      return;
    }
    if (this.result2) {
      this.result2 = false
      this.result1 = true
      return;
    }
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
