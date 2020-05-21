import { Component, OnInit } from '@angular/core';
import CanvasJS from './../../../../canvasjs.min.js';
import { MatDialog } from "@angular/material/dialog";
import { TestService } from "@app/_services/test.service";
import { Testcase } from "@app/_models/testcase";

@Component({
    selector: 'dp-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.less']
})

export class StatisticComponent implements OnInit {
    testcases: Array<Testcase>;
    blocked = 0;
    passed = 0;
    retest = 0;
    failed = 0;

    constructor(private testService: TestService) {
    }

    ngOnInit() {
        this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
            data => {
                this.testcases = data;
                this.testcases.forEach((element) => {
                    switch (element.status) {
                        case 'Failed':
                            this.failed += 1;
                            break;
                        case 'Retest':
                            this.retest += 1;
                            break;
                        case 'Passed':
                            this.passed += 1;
                            break;
                        case 'Blocked':
                            this.blocked += 1;
                            break;
                    }
                });
                const chart = new CanvasJS.Chart('chartContainer', {
                    theme: 'light2',
                    animationEnabled: true,
                    exportEnabled: true,
                    title: {
                        text: 'Tests statistics'
                    },
                    data: [{
                        type: 'pie',
                        showInLegend: true,
                        toolTipContent: '<b>{name}</b>: {y} (#percent%)',
                        indexLabel: '{name} - #percent%',
                        dataPoints: [
                            {y: this.blocked, name: 'Blocked'},
                            {y: this.passed, name: 'Passed'},
                            {y: this.failed, name: 'Failed'},
                            {y: this.retest, name: 'Retest'}
                        ]
                    }]
                });

                chart.render();
            },
            error => {
                console.log('cant get all testcases');
            }
        );
    }
}
