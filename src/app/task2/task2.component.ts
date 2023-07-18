import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  num1: any;
  num2: any;
  Result = 0;
  operation = '';
  count() {
    switch (this.operation) {
      case '+':this.Result = parseInt(this.num1) + parseInt(this.num2);
      break;
      case '-':this.Result = parseInt(this.num1) - parseInt(this.num2);
      break;
      case '*':this.Result = parseInt(this.num1) * parseInt(this.num2);
      break;
      case '/':this.Result = parseInt(this.num1) / parseInt(this.num2);
      break;
      
    }
    
  }
  
}
