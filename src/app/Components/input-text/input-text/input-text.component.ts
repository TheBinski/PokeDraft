import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() label?: string = '';
  @Input() placeholderText?: string = '';
  @Input() initialValue?: string = '';
  @Input() inputType?: string = 'text';

  value: string = '';

  constructor() {
    if (this.initialValue != null) {
      this.value = this.initialValue;
    }
  }
}
