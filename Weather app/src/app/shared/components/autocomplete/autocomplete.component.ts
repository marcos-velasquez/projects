import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'ui-autocomplete',
  templateUrl: './autocomplete.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AutocompleteComponent implements OnInit {
  @Output() selectedChange = new EventEmitter();
  @Output() search = new EventEmitter();
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) items: { name: string }[] = [];
  public control = new FormControl();

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(
        filter((value) => !!value),
        debounceTime(300)
      )
      .subscribe((value) => this.search.emit(value));
  }

  public select<T>(item: T) {
    this.selectedChange.emit(item);
    this.items = [];
    this.control.reset();
  }
}
