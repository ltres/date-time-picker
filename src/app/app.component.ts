import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { datePickerFormat, RECURRENCE_VALUES, TIMEFRAME_VALUES } from './constants';

import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OwlDateTimeModule, OwlNativeDateTimeModule } from '../../projects/picker/src/public_api';
import { CommonModule } from '@angular/common';

/** One day in milliseconds */
const ONE_DAY = 24 * 60 * 60 * 1000;

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommonModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: datePickerFormat},
  ]
})
export class AppComponent {
  protected readonly currentTab = signal<string>('date-range');
  protected recurrenceValues = RECURRENCE_VALUES
  protected timeframeValues= TIMEFRAME_VALUES

  constructor(dateTimeAdapter: DateTimeAdapter<unknown>){
    dateTimeAdapter.setLocale("it-IT");
  }

  protected selectedDates: [Date, Date] = [
    new Date(Date.now() - ONE_DAY),
    new Date(Date.now() + ONE_DAY)
  ];

  protected currentValue: Date = new Date(this.selectedDates[0]);

  protected endValue: Date = new Date(this.selectedDates[1]);

  protected selectedTrigger(date: Date): void {
    console.log(date);
  }
  getRecurrenceLabel( recurrence: string ){
    return recurrence;
  }
  getTimeframeLabel( timeframe: string ){
    return timeframe;
  }
  
}
