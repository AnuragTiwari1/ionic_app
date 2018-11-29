import { Component } from '@angular/core';

/**
 * Generated class for the HireacrcyModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hireacrcy-modal',
  templateUrl: 'hireacrcy-modal.html'
})
export class HireacrcyModalComponent {

  text: string;

  constructor() {
    console.log('Hello HireacrcyModalComponent Component');
    this.text = 'Hello World';
  }

}
