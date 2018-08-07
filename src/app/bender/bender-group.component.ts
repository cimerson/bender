import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
 
@Component({
  selector: 'mygroup',
  template: `
  <div class="mypanel">
    <div class="panel-heading" (click)="toggle.emit()">
      {{title}}
    </div>
    <div class="panel-body" [ngClass]="{'hidden': !opened}">
      <ng-content></ng-content>
    </div>
  <div>
  `,
  styleUrls: ['./bender.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GroupComponent {

  /*
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /*
   * Text to display in the panel heading
   */
  @Input() title: string;

  /**
   * Emitted when user clicks on panel
   * @type {EventEmitter<any>}
   */

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}