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
            width: '50%',
            data: newTestCase ? {
                steps: [
                    {
                        description: '',
                        result: ''
                    }
                ]
            } : {
                name: 'Application',
                description: 'This is very strange behavior',
                id: 12,
                assign: 'Flin Ryder',
                steps: [
                    {
                        description: 'Open navigation tab',
                        result: 'Navigation tab is open'
                    },
                    {
                        description: 'Type some text in input',
                        result: 'Correct text inside of input'
                    },
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    },
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    },
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    },
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    },
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    },
                    {
                        description: 'Do this',
                        result: 'Should be like this'
                    }
                ],
                priority: 'Major',
                label: 'Monday'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
}
