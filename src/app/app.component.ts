import {  ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {

  images = [
    {path: 'https://elkenany.com/uploads/main/08-05-221652013017978741372.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-2216520130171063692728.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-221652013017978741372.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-2216520130171063692728.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-221652013017978741372.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-2216520130171063692728.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-221652013017978741372.jpg'},
    {path: 'https://elkenany.com/uploads/main/08-05-2216520130171063692728.jpg'},

]

}
