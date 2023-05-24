import { Component, Input } from '@angular/core';
import { ICurrency } from '../../models/currency';

@Component({
  selector: 'actual-currency',
  templateUrl: './actual-currency.component.html',
  styleUrls: ['./actual-currency.component.scss'],
})
export class ActualCurrency {
  @Input() currency: ICurrency;
}
