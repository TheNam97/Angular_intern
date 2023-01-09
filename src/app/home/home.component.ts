import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //select
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name='Nguyễn Nam'
  public age = 26
  public traiCay = ['tao','nho','cam','quyt']
 public traiCay2 = [
  {ten:'tao',gia:12, hagia:true},
  {ten:'nho', gia:-15, hagia:false}
]

  constructor(){}

  public ngOnInit():void{
    console.log('trai cay = ', this.traiCay);
  }

  public resetName(): void {
    this.name=''
  }
}
