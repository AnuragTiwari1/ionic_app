import { Component } from '@angular/core';

/**
 * Generated class for the HierarchyModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hierarchy-modal',
  templateUrl: 'hierarchy-modal.html'
})
export class HierarchyModalComponent {

  text: string;

  constructor() {
    console.log('Hello HierarchyModalComponent Component');
    this.text = 'Hello World';
  }

}
