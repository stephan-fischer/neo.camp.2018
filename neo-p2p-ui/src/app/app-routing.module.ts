import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { NeonServiceTestComponent } from './components/neon-service-test/neon-service-test.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {path: '', component: NeonServiceTestComponent },
  {path: 'test', component: TestComponent },
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
