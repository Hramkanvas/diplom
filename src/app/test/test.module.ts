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
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [TestComponent, DialogTestCaseComponent, ScenarioComponent, TestrunComponent, StatisticComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        TestRoutingModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})
export class TestModule {
}
