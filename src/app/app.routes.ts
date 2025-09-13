import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Login } from './pages/login/login';
import { Member } from './pages/member/member';
import { List } from './pages/member/list/list';
import { Profile } from './pages/member/profile/profile';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { AuthGuard, NoLoginAccessGuard } from './guard/auth-guard';
import { Register } from './pages/register/register';

export const routes: Routes = [
    { path: '', component: Main }, 
    { path: 'login', component: Login, canActivate: [NoLoginAccessGuard] }, 
    { path: 'register', component: Register, canActivate: [NoLoginAccessGuard] }, 
    { 
        path: 'member', 
        component: Member, 
        children: [
            { path: 'list', component: List, canActivate: [AuthGuard] }, 
            { path: 'profile', component: Profile, canActivate: [AuthGuard] }
        ], 
        canActivate: [AuthGuard]
    }, 
    { path: '**', component: Pagenotfound }
];
