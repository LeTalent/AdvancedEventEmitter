import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface StockUpdate {
  id: number;
  value: number;
}
@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.scss']
})
export class StockStatusComponent implements OnChanges {
  @Input() public updatedstockvalue: number;
  @Input() public productsId: number;
  public color = '';
  public stockControl = new FormControl();
  // tslint:disable-next-line: no-output-native
  @Output()
  public change: EventEmitter<StockUpdate> = new EventEmitter<StockUpdate>();

  constructor() {}

  ngOnChanges() {
    if (this.updatedstockvalue > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

  changeStockValue() {
    this.change.emit({ id: this.productsId, value: this.stockControl.value });
    this.stockControl.reset();
  }
}
