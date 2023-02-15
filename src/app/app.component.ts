import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = 'Patrick';
  fullName = "Patrick Njiru Kung'u"
  about = 'I live in Nairobi, Kenya'
  clicked = ""
  addText () { this.clicked = "I have been clicked" } 
  // changeText () {
    //   this.clicked = "I have been double clicked"
    // }
  removeText () { this.clicked = "" }
  handleHover () { this.clicked = "Hello there!" }
  // passValueToComponent(e) { // error caused by 'e'
    //   console.log(e.target.value);
  // }
  answer = ""
  // changeAnswer (e) { // error caused by 'e'
  //   this.answer = e.target.value
  // }

  // exercise
  value = ''
  iAmDisabled = false
  handleClick () {
    this.value.toLowerCase() === "submitted" ? this.iAmDisabled = true : this.iAmDisabled = false
    this.value = ''
  }
  
}
