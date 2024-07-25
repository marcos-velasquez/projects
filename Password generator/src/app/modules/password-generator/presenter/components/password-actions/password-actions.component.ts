import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-password-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-actions.component.html',
})
export class PasswordActionsComponent {
  public readonly generate = output<void>();
  public readonly copy = output<void>();

  public readonly isCopied = signal<boolean>(false);
  public readonly isGenerated = signal<boolean>(false);

  public _generate() {
    this.generate.emit();
    this.isGenerated.set(true);
    setTimeout(() => this.isGenerated.set(false), 500);
  }

  public _copy() {
    this.copy.emit();
    this.isCopied.set(true);
    setTimeout(() => this.isCopied.set(false), 2000);
  }
}
