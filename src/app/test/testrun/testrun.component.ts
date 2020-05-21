import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestRunComponent } from '@app/test/dialogTestRun/dialogTestRun.component';
import { Testcase } from "@app/_models/testcase";
import { TestService } from "@app/_services/test.service";

@Component({
    selector: 'dp-testrun',
    templateUrl: './testrun.component.html',
    styleUrls: ['./testrun.component.less']
})
export class TestrunComponent implements OnInit {
    testcases: Array<Testcase>;

    constructor(public dialog: MatDialog, private testService: TestService) {
    }

    ngOnInit(): void {
        this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
            data => {
                this.testcases = data;
            },
            error => {
                console.log('cant get all testcases');
            }
        );
    }

    openDialog(testcase: Testcase) {
        const dialogRef = this.dialog.open(DialogTestRunComponent, {
            width: '50%',
            data: testcase
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.testService.updateTestcase(result).pipe().subscribe(
                    ok => {
                        this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
                            data => {
                                this.testcases = data;
                            },
                            error => {
                                console.log('cant get all testcases');
                            }
                        );
                    },
                    error => console.log('smth wrong with updating')
                );
            }
        });
    }
}
