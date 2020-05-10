import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { MatDialog } from '@angular/material/dialog';

@Component({ templateUrl: 'home.component.html', styleUrls: ['home.component.less'] })
export class HomeComponent {
    user: User;
    name: string;
    animal: string;

    constructor(private accountService: AccountService, public dialog: MatDialog) {
        this.user = this.accountService.userValue;
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
