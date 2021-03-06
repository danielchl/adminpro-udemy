import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"

import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from "./pages.routes";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";

import { ChartsModule } from 'ng2-charts';
import { GraficoDonutComponent } from "../components/grafico-donut/grafico-donut.component";
import { CommonModule } from "@angular/common";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonutComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule
    ]
})

export class PagesModule {}