import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryIndexComponent } from './pages/categories/category-index/category-index.component';
import { CategoryCreateComponent } from './pages/categories/category-create/category-create.component';
import { CategoryEditComponent } from './pages/categories/category-edit/category-edit.component';
import { CategoryShowComponent } from './pages/categories/category-show/category-show.component';
import { ProductIndexComponent } from './pages/products/product-index/product-index.component';
import { ProductCreateComponent } from './pages/products/product-create/product-create.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit.component';
import { ProductShowComponent } from './pages/products/product-show/product-show.component';
import { authGuard } from './core/guards/auth.guard';
import { RoleIndexComponent } from './pages/roles/role-index/role-index.component';
import { RoleCreateComponent } from './pages/roles/role-create/role-create.component';
import { RoleEditComponent } from './pages/roles/role-edit/role-edit.component';
import { RoleShowComponent } from './pages/roles/role-show/role-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
      { path: 'categories', component: CategoryIndexComponent, canActivate: [authGuard] },
      { path: 'categories/create', component: CategoryCreateComponent, canActivate: [authGuard] },
      { path: 'categories/:id/edit', component: CategoryEditComponent, canActivate: [authGuard] },
      { path: 'categories/:id', component: CategoryShowComponent, canActivate: [authGuard] },
      { path: 'products', component: ProductIndexComponent, canActivate: [authGuard] },
      { path: 'products/create', component: ProductCreateComponent, canActivate: [authGuard] },
      { path: 'products/:id/edit', component: ProductEditComponent, canActivate: [authGuard] },
      { path: 'products/:id', component: ProductShowComponent, canActivate: [authGuard] },
      { path: 'roles', component: RoleIndexComponent, canActivate: [authGuard] },
      { path: 'roles/create', component: RoleCreateComponent, canActivate: [authGuard] },
      { path: 'roles/:id/edit', component: RoleEditComponent, canActivate: [authGuard] },
      { path: 'roles/:id', component: RoleShowComponent, canActivate: [authGuard] },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
