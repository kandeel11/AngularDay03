import { Routes } from '@angular/router';
import { Home } from '../Components/home/home';
import { ProductMaster } from '../Components/product-master/product-master';
import { NotFound } from '../Components/not-found/not-found';
import { MainLayout } from '../Components/main-layout/main-layout';
import { SignIn } from '../Components/sign-in/sign-in';
import { SignUp } from '../Components/sign-up/sign-up';
import { ProductDetails } from '../Components/product-details/product-details';
import { UserDashboard } from '../Components/user-dashboard/user-dashboard';
import { authGuard } from '../Guards/auth-guard';
import { adminGuard } from '../Guards/admin-guard';

export const routes: Routes = [
    {
    path:'', component: MainLayout, canActivateChild: [authGuard], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'products', component: ProductMaster },
    { path: 'products/:id', component: ProductDetails },
    
]},
    {path:'signin', component: SignIn},
    {path:'signup', component: SignUp},
    {path:"dashboard",component:UserDashboard, canActivate: [authGuard, adminGuard]},
    { path: '**', component: NotFound }

    
];
