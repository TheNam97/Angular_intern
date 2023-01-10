import { Component, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.css']
})
export class ChaComponent {
  @ViewChild('thangTeo') tteo: ConComponent | undefined // undefined thì không cần gọi
  @ViewChild('thangTy') tty: ConComponent | undefined
  

  public chaMessage = ''
  public chaoCon(ten: string){
    this.chaMessage='chao con '+ten
  }
  public choTien(){
    this.tteo?.bachoTien(10)
    this.tty?.bachoTien(11)
  }
}
