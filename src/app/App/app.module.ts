import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActualCurrency } from '../Shared/components/ActualCurrency/actual-currency.component';
import { Converter } from '../Shared/components/Converter/converter.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ConverterItem } from '../Shared/components/ConverterItem/covnerter-item.component';
import { Container } from '../Shared/components/Container/container.component';
@NgModule({
  declarations: [
    AppComponent,
    ActualCurrency,
    Converter,
    ConverterItem,
    Container,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
