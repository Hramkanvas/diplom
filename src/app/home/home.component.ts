import { Component, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

import { Project, User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '@app/_services/home.service';

@Component({templateUrl: 'home.component.html', styleUrls: ['home.component.less']})
export class HomeComponent implements OnInit {
    name: string;
    animal: string;
    projects: Array<Project>;

    constructor(public dialog: MatDialog,
                private homeService: HomeService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.homeService.getAll().pipe().subscribe(
            data => {
                this.projects = data;
            },
            error => {
                console.log('something wrong with projects');
            }
        );
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(name => {
            if (name) {
                this.homeService.create({name}).pipe().subscribe(
                    next => {
                        console.log(next);
                        this.homeService.getAll().pipe().subscribe(
                            data => {
                                this.projects = data;
                            },
                            error => {
                                console.log('something wrong with projects');
                            }
                        );
                    },
                    error => console.log(error)
                );
            }
        });
    }

    deleteProject(id: string) {
        this.homeService.delete(id).pipe().subscribe(
            next => {
                this.homeService.getAll().pipe().subscribe(
                    data => {
                        this.projects = data;
                    },
                    error => {
                        console.log('something wrong with projects');
                    }
                );
            },
            error => console.log(error)
        );
    }

    openProject(id: string) {
        localStorage.setItem('currentProject', id);
    }
}
