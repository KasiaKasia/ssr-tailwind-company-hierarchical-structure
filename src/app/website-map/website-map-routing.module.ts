import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteMapComponent } from './website-map/website-map.component';

const routes: Routes = [{
  path: '',
  component: WebsiteMapComponent,
  data: { title: 'Mapa strony' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteMapRoutingModule { }
