import { Component, OnInit } from '@angular/core';
import CanvasJS from './../../../../canvasjs.min.js';

@Component({
    selector: 'dp-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.less']
})

export class StatisticComponent implements OnInit {
    ngOnInit() {
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
                    {y: 4, name: 'Blocked'},
                    {y: 11, name: 'Passed'},
                    {y: 3, name: 'Failed'},
                    {y: 5, name: 'Retest'}
                ]
            }]
        });

        chart.render();
    }
}
