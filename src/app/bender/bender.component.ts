import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { GroupComponent } from './bender-group.component';
 
@Component({
  selector: 'bender',
  template: '<ng-content></ng-content>',
  styleUrls: ['./bender.component.css']
})
export class BenderComponent  implements AfterContentInit {
  @ContentChildren(GroupComponent)
  groups: QueryList<GroupComponent>;

  /*
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit() {
    // console.log (this.groups);

    // Set active to first element
    //this.groups.toArray()[0].opened = true;

    // Loop through all Groups
    this.groups.toArray().forEach((t) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      t.toggle.subscribe(() => {
        // Open or close the group
        this.openGroup(t);
      });
    });
  }

  /**
   * Open (Close) an bender group
   * @param group   Group instance
   */
 
  openGroup(group: GroupComponent) {

    // close all groups
    //this.groups.toArray().forEach(t => t.opened = false);
    //open only selected group
    //group.opened = true;

    // open or close the selected  group
    group.opened = !group.opened;
  }
}