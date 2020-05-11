import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestCaseComponent } from '@app/test/dialogTestCase/dialogTestCase.component';

@Component({
    selector: 'dp-scenario',
    templateUrl: './scenario.component.html',
    styleUrls: ['./scenario.component.less']
})
export class ScenarioComponent implements OnInit {
    testCases = [
        'First test case',
        'Second test case',
        'Third test case',
        'Forth test case',
        'Random long name of test case'];

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog(newTestCase: boolean) {
        const dialogRef = this.dialog.open(DialogTestCaseComponent, {
            width: '500px',
            data: newTestCase ? {
                steps: [
                    {
                        description: '',
                        result: ''
                    }
                ]
            } : {
                name: 'Name',
                description: 'Description text a lot of text',
                id: 12,
                steps: [
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    }
                ],
                label: 'monday'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
}
