import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  nettoIncome : number = 5000
  vatRate : number = 23
  taxForm: string = 'progrssive'; // line
  taxFreeAmountSelected: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }


  taxFreeAmount() {
    
  }

}
