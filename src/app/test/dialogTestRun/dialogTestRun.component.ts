import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface TestCaseStep {
    description: string;
    result: string;
}

export interface DialogTestCaseData {
    assign: string;
    priority: string;
    new: boolean;
    name: string;
    id: number;
    label: string;
    description: string;
    steps: Array<TestCaseStep>;
}

@Component({
    selector: 'dp-testrun-dialog',
    templateUrl: 'dialogTestRun.component.html',
    styleUrls: ['dialogTestRun.component.less']
})
export class DialogTestRunComponent {

    displayedColumns = ['id', 'description', 'result'];

    constructor(
        public dialogRef: MatDialogRef<DialogTestRunComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogTestCaseData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addEmptyStep() {
        this.data.steps.push({description: '', result: ''});
    }

    deleteStep(id: number) {
        this.data.steps.splice(id, 1);
        console.log(id);
    }
}
