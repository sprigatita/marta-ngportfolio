import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SeparatorComponent} from "../../components/separator/separator.component";
import {ProjectCardComponent} from "../../components/project-card/project-card.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    SeparatorComponent,
    ProjectCardComponent,
    HttpClientModule
  ]
})
export class HomepageModule { }
