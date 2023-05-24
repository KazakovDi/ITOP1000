import { Component, Input } from '@angular/core';
import { IConverter } from '../../models/converterBlock';
import { ICurrency } from '../../models/currency';
import { IChangeConverterParams } from '../../models/changingParams';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class Converter {
  @Input() currencies: ICurrency[];
  blocks: IConverter = {
    left: {
      value: 1,
      rate: 1,
    },
    right: {
      value: 1,
      rate: 1,
    },
  };
  changeValue({ target, side, oppositeSide }: IChangeConverterParams) {
    const currency = Number.parseFloat(target);
    this.blocks[side].value = currency;
    const newValue =
      (this.blocks[side].rate / this.blocks[oppositeSide].rate) * currency;
    this.blocks[oppositeSide].value = Number.parseFloat(newValue.toFixed(4));
  }
  changeRate({ target, side, oppositeSide }: IChangeConverterParams) {
    const rate = Number.parseFloat(target);
    this.blocks[side].rate = rate;
    const newValue =
      (this.blocks[side].rate / this.blocks[oppositeSide].rate) *
      this.blocks[side].value;
    this.blocks[oppositeSide].value = Number.parseFloat(newValue.toFixed(4));
  }
}
