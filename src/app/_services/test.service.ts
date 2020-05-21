import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Testcase } from '@app/_models/testcase';
import { Step } from "@app/_models/step";

@Injectable({ providedIn: 'root' })
export class TestService {

    constructor(private http: HttpClient) {}

    createTestcase(testcase: Testcase) {
        return this.http.post<{}>(`${environment.apiUrl}/test/create-testcase`, testcase);
    }

    updateTestcase(testcase: Testcase) {
        return this.http.post<{}>(`${environment.apiUrl}/test/update-testcase`, testcase);
    }

    getAll(currentProject: string) {
        return this.http.get<Testcase[]>(`${environment.apiUrl}/test/testcases/${currentProject}`);
    }

    getSteps(currentCase: string) {
        return this.http.get<Step[]>(`${environment.apiUrl}/test/get-steps/${currentCase}`);
    }

    deleteTestcase(id: string) {
        return this.http.delete(`${environment.apiUrl}/test/${id}`);
    }
}
