import { Component, Input } from '@angular/core';
import { selectFilterOption } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.scss']
})
export class MultiSelectFilterComponent {
  @Input() initialValues?: Array<selectFilterOption>;
  @Input() label?: string = 'Select';
  @Input() placeholderText?: string = 'Select';
  @Input() options?: Array<selectFilterOption>;
  
  selection: Array<selectFilterOption> = [];

  constructor() {
    if (this.initialValues != null) {
      this.selection = this.initialValues;
    }
  }
}
