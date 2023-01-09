import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // Thêm children[] là các đường dẫn con /home/login/products....
{ path: 'about', component: AboutComponent }, // url nao thi vao component do
{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },// nếu mặc định không chọn sẽ là trang chủ mặc định
{ path: '**', component: PageNotFoundComponent }]; // url sai sẽ vào báo lỗi( tạo riêng 1 component hiển thị báo lỗi)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
