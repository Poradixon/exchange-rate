import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ConverterComponent} from './components/converter/converter.component';
import {SlideShowComponent} from './components/slide-show/slide-show.component';
import {ChartComponent} from './components/chart/chart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'converter', component: ConverterComponent},
  {path: 'slideshow', component: SlideShowComponent},
  {path: 'chart', component: ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
