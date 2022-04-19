import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    GuardLogo = '/assets/logos/Faction-Guard.png'
    ECLogo = '/assets/logos/Faction-ElementalChampions.png'
    DrakkenLogo = '/assets/logos/factionsymboldraken.png'
    MunkeyLogo = '/assets/logos/Faction-EmpireoftheApes.png'
    DinoLogo = '/assets/logos/Faction-Terrasaurs.png'
    FishLogo = '/assets/logos/Faction-Tritons.png'
    SSSLogo = '/assets/logos/faction-shadowsunsyndicate.png'
    LegionLogo = '/assets/logos/faction-mutates.png'
    EcoTerrorLogo = '/assets/logos/Faction-GreenFury.png'
    UCILogo = '/assets/logos/Faction-UberCorpInternational.png'
    MartianLogo = '/assets/logos/Faction-MartianMenace.png'
    CommieLogo = '/assets/logos/factionsymbolzerkalo.png'
    PELogo = '/assets/logos/Faction-PlanetEaters.png'
    NecroLogo = '/assets/logos/factionsymbolnecro.png'
    BugLogo = '/assets/logos/Faction-SavageSwarm.png'
    WasteLogo = '/assets/logos/factionsymbolwaste.png'
    CthulLogo = '/assets/logos/Faction-LordsOfCthul.png'
    M8DLogo = '/assets/logos/faction-masters.png'
    MoleLogo = '/assets/logos/Faction-SubterranUprising.png'
    
    constructor() { }
    
    ngOnInit(): void {
    }
}
