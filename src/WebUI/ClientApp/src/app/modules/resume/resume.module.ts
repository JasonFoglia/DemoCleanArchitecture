import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { CustomMaterialModule } from 'src/app/material';
import { TitlePlaceDateFormatPipe } from './components/dashboard/title-place-date-format.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    TitlePlaceDateFormatPipe
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ResumeRoutingModule,
  ]
})
export class ResumeModule { }
