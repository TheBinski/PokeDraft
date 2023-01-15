import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() label?: string = 'Search';
  @Input() placeholderText?: string = '';
  @Input() initialValue?: string;
  @Input() styleWidth?: string = '';
  @Input() styleHeight?: string = '';
  
  searchValue: string = '';

  constructor() {
    if (this.initialValue != null) {
      this.searchValue = this.initialValue;
    }
  }
}
