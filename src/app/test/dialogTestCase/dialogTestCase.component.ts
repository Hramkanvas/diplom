import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface TestCaseStep {
    description: string;
    result: string;
}

export interface DialogTestCaseData {
    new: boolean;
    name: string;
    id: number;
    label: string;
    description: string;
    steps: Array<TestCaseStep>;
}

@Component({
    selector: 'dp-test-dialog',
    templateUrl: 'dialogTestCase.component.html',
    styleUrls: ['dialogTestCase.component.less']
})
export class DialogTestCaseComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogTestCaseComponent>,
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
