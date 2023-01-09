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

  public districts: string[] =['Quan Huyen']
  public cities = [
    {city:'Chon!', district:[
      'Quan Huyen'
    ]},
    {city:'An Giang', district:[
      'a','b','c','d'
    ]},
    {city:'Dong Thap', district:[
      'aaaa','bbbb','cccc','dddd'
    ]}
  ]

  constructor(){}

  public ngOnInit():void{
    console.log('trai cay = ', this.traiCay);
  }

  public resetName(): void {
    this.name=''
  }
  public changeCity(event:any) {
    const city = event.target.value   // lay du lieu truyen vao, phai co value=""

    // const search=this.cities.filter(data=> data.city === city ) // tra ve 1 array
    // if(search && search.length>0){
    //   this.districts = search[0].district
    // }

    this.districts=this.cities.find(data => data.city === city)?.district || [] // keitu toan tu 3 ngoi
    
  }
}
