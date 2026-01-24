import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { RulesComponent } from './rules/rules.component';
import { BasicRulesComponent } from './basic-rules/basic-rules.component';
import { MapComponent } from './map/map.component';
import { ParagonsComponent } from './paragons/paragons.component';
import { RadicalsComponent } from './radicals/radicals.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { InvadersComponent } from './invaders/invaders.component';
import { DevourersComponent } from './devourers/devourers.component';
import { FiendsComponent } from './fiends/fiends.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'alliances', component: AlliancesComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'basic-rules', component: BasicRulesComponent },
    { path: 'map', component: MapComponent },
    { path: 'paragons', component: ParagonsComponent },
    { path: 'paragon', component: ParagonsComponent },
    { path: 'radicals', component: RadicalsComponent },
    { path: 'radical', component: RadicalsComponent },
    { path: 'collaborators', component: CollaboratorsComponent },
    { path: 'collaborator', component: CollaboratorsComponent },
    { path: 'invaders', component: InvadersComponent },
    { path: 'invader', component: InvadersComponent },
    { path: 'devourers', component: DevourersComponent },
    { path: 'devourer', component: DevourersComponent },
    { path: 'fiends', component: FiendsComponent },
    { path: 'fiend', component: FiendsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }