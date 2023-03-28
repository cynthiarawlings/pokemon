import { Component, Input } from '@angular/core';
import { Set } from '../sets.model';

@Component({
  selector: 'app-set-item',
  templateUrl: './set-item.component.html',
  styleUrls: ['./set-item.component.css']
})
export class SetItemComponent {
  @Input() set: Set;
  @Input() index: number;
}
