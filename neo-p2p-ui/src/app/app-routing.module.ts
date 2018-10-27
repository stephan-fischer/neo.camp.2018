import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { NeonServiceTestComponent } from './components/neon-service-test/neon-service-test.component';


const routes: Routes = [
  {path: '', component: NeonServiceTestComponent },
  {path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
