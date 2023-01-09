import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //select
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name='Nguyễn Nam'
  public age = 26
  constructor(){}
  public resetName(): void {
    this.name=''
  }
}
