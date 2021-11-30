import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  number1 = 0;
  number2 = 0;
  equation: String = '';
  operator: String = '';
  currentNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn(operator: string) : void
  {
    if(this.operator==='')
    {
      this.number1 = this.currentNumber;
      this.equation = String(this.number1) + operator;
      this.currentNumber = 0;
    }
    this.operator = operator;
  }

  numberAdd(num: string) :void
  {
    this.currentNumber = Number(String((this.currentNumber) + num));
  }

  onClickEqualBtn()
  {
    this.number2 = this.currentNumber;
    this.equation += (String(this.number2) + '=');
    this.currentNumber = this.calculate();
    this.operator='';
  }

  private calculate(): number
  {
    let result = 0;
    if(this.operator == '+')  result = Number(this.number1) + Number(this.number2);
    else if (this.operator == '-') result = Number(this.number1) - Number(this.number2);
    else if (this.operator == '*') result = Number(this.number1) * Number(this.number2);
    else if (this.operator == '/') result = Number(this.number1) / Number(this.number2);
    return result;
  }

  onClear()
  {
    this.number1 = 0;
  this.number2 = 0;
  this.equation = '';
  this.operator = '';
  this.currentNumber = 0;
  }

}
