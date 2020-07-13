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


  // calculated
  clearIncome: number = null;



  HEALTH_INSURENCE = 362.34;

  TAX_LIMIT = 85528.0;

  constructor() { }

  ngOnInit(): void {
  }

  calcClearIncome = function () {
    this.clearIncome =
      this.grossValue -
      this.vatValue -
      this.totalSocialContributionValue -
      this.donationTotal -
      this.netExpenses;
  };

  taxFreeAmount() {

  }

}
