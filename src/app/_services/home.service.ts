import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Project } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(private http: HttpClient) {}

    create(name: {name: string}) {
        return this.http.post(`${environment.apiUrl}/home/create`, name);
    }

    getAll() {
        return this.http.get<Project[]>(`${environment.apiUrl}/home/projects`);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/home/${id}`);
    }
}
