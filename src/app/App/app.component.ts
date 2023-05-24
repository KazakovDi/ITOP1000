import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../Shared/services/currencies.service';
import { ICurrency } from '../Shared/models/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  currencies: ICurrency[] = [];
  constructor(private CurrenciesService: CurrencyService) {}
  ngOnInit(): void {
    this.fetchMainCurrencies();
  }

  private fetchMainCurrencies(): void {
    this.CurrenciesService.getMainCurrencies().subscribe(
      (currencies: ICurrency[]) => {
        return (this.currencies = currencies.filter(
          (item: ICurrency) => item.cc === 'EUR' || item.cc === 'USD'
        ));
      }
    );
  }
}
