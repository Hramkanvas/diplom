import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestRunComponent } from '@app/test/dialogTestRun/dialogTestRun.component';

@Component({
    selector: 'dp-testrun',
    templateUrl: './testrun.component.html',
    styleUrls: ['./testrun.component.less']
})
export class TestrunComponent implements OnInit {
    testCases = [
        'First test case',
        'Second test case',
        'Third test case',
        'Forth test case',
        'Random long name of test case'];

    tesstCases = [
        'Another test case',
        '34 test case',
        'Important case',
        'F54',
        'RRR34342 2342'];

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog(newTestCase: boolean) {
        const dialogRef = this.dialog.open(DialogTestRunComponent, {
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
