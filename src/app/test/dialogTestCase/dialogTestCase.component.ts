import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogTestCaseData {
    new: boolean;
    name: string;
}

@Component({
    selector: 'dp-home-dialog',
    templateUrl: 'dialogTestCase.component.html',
})
export class DialogTestCaseComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogTestCaseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogTestCaseData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
