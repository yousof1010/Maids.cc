import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './dashboard/pages/user/user.component';
import { ListComponent } from './dashboard/pages/list/list.component';

const routes: Routes = 
          [
            { path: '', component: ListComponent },
            { path: 'User/:id', component: UserComponent}
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
