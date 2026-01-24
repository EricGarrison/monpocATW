import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, TopNavComponent]
})
export class AlliancesComponent implements OnInit {
    GuardLogo = './assets/logos/Faction-Guard.png'
    ECLogo = './assets/logos/Faction-ElementalChampions.png'
    DrakkenLogo = './assets/logos/factionsymboldraken.png'
    MunkeyLogo = './assets/logos/Faction-EmpireoftheApes.png'
    DinoLogo = './assets/logos/Faction-Terrasaurs.png'
    FishLogo = './assets/logos/Faction-Tritons.png'
    SSSLogo = './assets/logos/faction-shadowsunsyndicate.png'
    LegionLogo = './assets/logos/faction-mutates.png'
    EcoTerrorLogo = './assets/logos/Faction-GreenFury.png'
    UCILogo = './assets/logos/Faction-UberCorpInternational.png'
    MartianLogo = './assets/logos/Faction-MartianMenace.png'
    CommieLogo = './assets/logos/factionsymbolzerkalo.png'
    PELogo = './assets/logos/Faction-PlanetEaters.png'
    NecroLogo = './assets/logos/factionsymbolnecro.png'
    BugLogo = './assets/logos/Faction-SavageSwarm.png'
    WasteLogo = './assets/logos/factionsymbolwaste.png'
    CthulLogo = './assets/logos/Faction-LordsOfCthul.png'
    M8DLogo = './assets/logos/faction-masters.png'
    MoleLogo = './assets/logos/Faction-SubterranUprising.png'
    VegeLogo = './assets/logos/Faction-Vegetyrants.png'
    FGLogo = './assets/logos/Faction-FirstGuardians.png'
    AOLogo = './assets/logos/Faction-AncientOnes.png'

  constructor() { }

  ngOnInit(): void {
  }

}
