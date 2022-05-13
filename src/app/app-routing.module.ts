import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard],
    resolve: { ContactResolverService },
  },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    canActivate: [AuthGuard],
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'statistics',
    component: StatisticPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
