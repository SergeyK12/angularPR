import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent {

  @Input() human;
  addClass = false;
  frends = '';


  onClick() {
    //console.log("Работает")
    this.addClass = true;
  }
  onShow(human){

    this.frends = human.friends;
  }

}
