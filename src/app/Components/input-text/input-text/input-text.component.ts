import { Component, Input } from '@angular/core';
import * as uuid from 'uuid';

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
  @Input() formId?: string = '';

  value: string = '';

  constructor() {}

  ngOnInit() {
    if (this.initialValue != null) {
      this.value = this.initialValue;
    }

    if (this.formId == null || this.formId.length === 0) {
      this.formId = uuid.v4();
      console.log(this.formId);
    }
  }
}
