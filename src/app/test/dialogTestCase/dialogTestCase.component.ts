import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TestService } from "@app/_services/test.service";

export interface TestCaseStep {
    description: string;
    expectedResult: string;
}

export interface DialogTestCaseData {
    new: boolean;
    name: string;
    id: number;
    label: string;
    description: string;
    priority: string;
    steps: Array<TestCaseStep>;
}

@Component({
    selector: 'dp-test-dialog',
    templateUrl: 'dialogTestCase.component.html',
    styleUrls: ['dialogTestCase.component.less']
})
export class DialogTestCaseComponent implements OnInit {

    constructor(
        private testService: TestService,
        public dialogRef: MatDialogRef<DialogTestCaseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogTestCaseData) {
    }

    ngOnInit(): void {
        if (!this.data.new) {
            this.testService.getSteps(this.data.id.toString()).pipe().subscribe(
                steps => this.data.steps = steps,
                error => console.log(error)
            );
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addEmptyStep() {
        this.data.steps = this.data.steps || [];
        this.data.steps.push({description: '', expectedResult: ''});
    }

    deleteStep(id: number) {
        this.data.steps.splice(id, 1);
    }
}
