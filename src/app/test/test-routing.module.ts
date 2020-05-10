import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenarioComponent} from '@app/test/scenario/scenario.component';
import { StatisticComponent} from '@app/test/statistic/statistic.component';
import { TestrunComponent} from '@app/test/testrun/testrun.component';
import { TestComponent } from '@app/test/test.component';

const routes: Routes = [
    {
        path: '', component: TestComponent ,
        children: [
            { path: 'scenario', component: ScenarioComponent },
            { path: 'statistic', component: StatisticComponent },
            { path: 'testrun', component: TestrunComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
