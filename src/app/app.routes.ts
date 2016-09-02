import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MatchsComponent } from './matchs/matchs.component';
import { TeamsComponent } from './teams/teams.component';

export const ROUTES : Routes =[
{path:'', redirectTo:'teams', pathMatch:'full'},
{path:'matchs', component:MatchsComponent},
{path:'teams',component:TeamsComponent}


];

export const Route: ModuleWithProviders = RouterModule.forRoot(ROUTES);