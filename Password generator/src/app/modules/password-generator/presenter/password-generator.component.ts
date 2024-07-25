import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PasswordConfigBuilder } from '../domain/PasswordConfig';
import { GeneratePasswordUseCase } from '../application/GeneratePassword/GeneratePassword.usecase';
import { CopyPasswordUseCase } from '../application/CopyPassword/CopyPassword.usecase';
import { PasswordActionsComponent } from './components/password-actions/password-actions.component';
import { IsNumberPipe, IsSymbolPipe } from './pipes';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IsNumberPipe, IsSymbolPipe, PasswordActionsComponent],
  templateUrl: './password-generator.component.html',
})
export class PasswordGeneratorComponent implements OnInit {
  public readonly config = PasswordConfigBuilder;
  public readonly generatedPassword = signal<string>('');
  public readonly form = inject(FormBuilder).nonNullable.group({
    length: [this.config.default.length],
    withNumbers: [this.config.default.withNumbers],
    withSymbols: [this.config.default.withSymbols],
    withUpperCase: [this.config.default.withUpperCase],
  });

  ngOnInit() {
    this.generate();
    this.form.valueChanges.subscribe(() => this.generate());
  }

  public generate() {
    this.generatedPassword.set(new GeneratePasswordUseCase().execute(this.form.getRawValue()));
  }

  public copy() {
    new CopyPasswordUseCase().execute(this.generatedPassword());
  }
}
