import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ScenarioComponent } from './scenario/scenario.component';
import { TestrunComponent } from './testrun/testrun.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TestRoutingModule } from '@app/test/test-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { DialogTestCaseComponent } from '@app/test/dialogTestCase/dialogTestCase.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { DialogTestRunComponent } from '@app/test/dialogTestRun/dialogTestRun.component';
import { MatTabsModule } from "@angular/material/tabs";


@NgModule({
    declarations: [
        TestComponent,
        DialogTestCaseComponent,
        ScenarioComponent,
        TestrunComponent,
        StatisticComponent,
        DialogTestRunComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        TestRoutingModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatRadioModule,
        MatTabsModule
    ]
})
export class TestModule {
}
