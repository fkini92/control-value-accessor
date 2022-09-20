import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRaterComponent),
      multi: true,
    },
  ],
})
export class StarRaterComponent implements OnInit, ControlValueAccessor {
  ratings = [
    {
      text: 'Insuffisant',
      stars: 1,
    },
    {
      text: 'Médiocre',
      stars: 2,
    },
    {
      text: 'Suffisant',
      stars: 3,
    },
    {
      text: 'Satisfaisant',
      stars: 4,
    },
    {
      text: 'Bien',
      stars: 5,
    },
  ];
  onChanged: any = () => {};
  onTouched: any = () => {};
  disabled: boolean;
  public ratingText: '';
  public _value: number = 0;

  constructor() {}

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(star) {
    if (!this.disabled) {
      this.onTouched();
      this._value = star.stars;
      this.onChanged(star.stars);
    }
  }

  onMouseover(star) {
    this.ratingText = !this.disabled ? star.text : '';
  }

  onMouseout() {
    this.ratingText = '';
  }

  ngOnInit() {}
}
