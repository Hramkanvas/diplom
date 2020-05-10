import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '@app/home/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: {new: true, name: ''}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
}
