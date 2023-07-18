import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent {
  @Input() initialValue?: selectFilterOption;
  @Input() label?: string = 'Select';
  @Input() placeholderText?: string = 'Select';
  @Input() options?: Array<selectFilterOption>;
  
  selection: selectFilterOption = {
    text: '',
    value: null
  };
  selectionText: string = '';

  constructor() {}

  ngOnInit() {
    if (this.initialValue != null) {
      this.selection = this.initialValue;
      this.selectionText = this.initialValue.text;
    }
  }

  updateText(options: HTMLOptionsCollection, value: string): void {
    let opts: Array<selectFilterOption> = Array.from(options).map( x => ({text: x.text, value: x.value}));
    let pos: number = opts.findIndex(x => (x.value == value));
    this.selectionText = opts[pos].text;
  }
}

export type selectFilterOption = {
  text: string;
  value: any;
}
