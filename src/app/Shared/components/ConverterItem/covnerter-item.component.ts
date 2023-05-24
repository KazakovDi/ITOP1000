import { Component, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { ICurrency } from '../../models/currency';
import { IConverterBlock } from '../../models/converterBlock';
import {
  IChangeConverterDOMParams,
  IChangeConverterParams,
} from '../../models/changingParams';
@Component({
  selector: 'converter-item',
  templateUrl: './converter-item.component.html',
  styleUrls: ['./converter-item.component.scss'],
})
export class ConverterItem {
  @Input() currencies: ICurrency[];
  @Input() block: IConverterBlock;
  @Input() oppositeBlock: IConverterBlock;
  @Input() side: 'left' | 'right';
  @Input() oppositeSide: 'left' | 'right';
  @Output() CurrencyName = new EventEmitter<IChangeConverterParams>();
  @Output() CurrencyRate = new EventEmitter<IChangeConverterParams>();

  enterCurrency({ target, side, oppositeSide }: IChangeConverterDOMParams) {
    const inputValue = target.value;
    this.CurrencyName.emit({ target: inputValue, side, oppositeSide });
  }
  changeRate({ target, side, oppositeSide }: IChangeConverterDOMParams) {
    const inputValue = target.value;
    this.CurrencyRate.emit({ target: inputValue, side, oppositeSide });
  }
}
