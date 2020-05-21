import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestCaseComponent } from '@app/test/dialogTestCase/dialogTestCase.component';
import { Testcase } from "@app/_models/testcase";
import { TestService } from "@app/_services/test.service";
import { Step } from "@app/_models/step";
import { element } from "protractor";

@Component({
    selector: 'dp-scenario',
    templateUrl: './scenario.component.html',
    styleUrls: ['./scenario.component.less']
})
export class ScenarioComponent implements OnInit {
    testcases: Array<Testcase>;
    filteredTestcases: Array<Testcase>;

    constructor(public dialog: MatDialog, private testService: TestService) {
    }

    ngOnInit(): void {
        this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
            data => {
                this.testcases = data;
                this.filteredTestcases = data;
            },
            error => {
                console.log('cant get all testcases');
            }
        );
    }

    openDialog(newTestCase: boolean, testcase?: Testcase) {
        const dialogRef = this.dialog.open(DialogTestCaseComponent, {
            width: '500px',
            data: newTestCase ? {
                name: '',
                label: '',
                priority: 'Minor',
                description: '',
                new: true
            } : {...testcase, new: false}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (result.new && result.name) {
                    const newTestcase = new Testcase();
                    Object.assign(newTestcase, result);
                    newTestcase.assign = JSON.parse(localStorage.getItem('user')).firstName + ' ' +
                        JSON.parse(localStorage.getItem('user')).lastName;
                    console.log(newTestcase);
                    newTestcase.projectID = localStorage.getItem('currentProject');
                    this.testService.createTestcase(newTestcase).pipe().subscribe(
                        ok => {
                            this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
                                data => {
                                    this.testcases = data;
                                    this.filteredTestcases = data;
                                },
                                error => {
                                    console.log('cant get all testcases');
                                }
                            );
                        },
                        error => console.log(error)
                    );
                }
                else if (!result.new && result.name){
                    this.testService.updateTestcase(result).pipe().subscribe(
                        ok => {
                            this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
                                data => {
                                    this.testcases = data;
                                    this.filteredTestcases = data;
                                },
                                error => {
                                    console.log('cant get all testcases');
                                }
                            );
                        },
                        error => console.log('smth wrong with updating')
                    );
                }
            }
        });
    }

    deleteTestcase(id: string) {
        this.testService.deleteTestcase(id).pipe().subscribe(
            ok => {
                this.testService.getAll(localStorage.getItem('currentProject')).pipe().subscribe(
                    data => {
                        this.testcases = data;
                        this.filteredTestcases = data;
                    },
                    error => {
                        console.log('cant get all testcases');
                    }
                );
            },
            error => console.log(error)
        );
    }

    search($event: KeyboardEvent) {
        const searchValue = (event.target as HTMLInputElement).value;
        if (searchValue) {
            this.filteredTestcases = this.testcases.filter(elem => {
                return elem.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
            });
        }
        else {
            this.filteredTestcases = this.testcases;
        }
    }
}
