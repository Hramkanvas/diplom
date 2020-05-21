import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TestService } from '@app/_services/test.service';

export interface TestCaseStep {
    actualResult: string;
    description: string;
    expectedResult: string;
}

export interface DialogTestCaseData {
    status: string;
    assign: string;
    priority: string;
    new: boolean;
    name: string;
    id: number;
    finished: boolean;
    label: string;
    description: string;
    steps: Array<TestCaseStep>;
}

@Component({
    selector: 'dp-testrun-dialog',
    templateUrl: 'dialogTestRun.component.html',
    styleUrls: ['dialogTestRun.component.less']
})
export class DialogTestRunComponent implements OnInit{


    constructor(
        private testService: TestService,
        public dialogRef: MatDialogRef<DialogTestRunComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogTestCaseData) {
    }

    ngOnInit(): void {
        this.testService.getSteps(this.data.id.toString()).pipe().subscribe(
            steps => this.data.steps = steps,
            error => console.log(error)
        );
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onMoveToFinish() {
        this.data.finished = true;
        this.dialogRef.close(this.data);
    }

    onMoveToProcess() {
        this.data.finished = false;
        this.dialogRef.close(this.data);
    }
}
