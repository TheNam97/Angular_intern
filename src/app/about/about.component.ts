import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public loginName='user'
  public counter=0
  public t=0
  public bp = 0
  constructor(private common: CommonService){ // khởi tạo
    
  }
  ngOnInit(){ // mỗi khi component đc gọi nó sẽ chạy
    this.counter = this.common.counter
    this.bp = this.common.binhPhuong(this.counter)
    this.common.counter++
    this
    // this.counter = this.common.counter;
  }
  aaa(){
    this.common
  }
}
