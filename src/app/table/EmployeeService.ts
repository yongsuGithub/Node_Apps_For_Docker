import { Injectable } from '@angular/core';

import { IEmployee } from "./IEmployee";

import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';



@Injectable()
export class EmployeeService {
    option: RequestOptions
    myheaders: Headers

    constructor(private _http: HttpClient) {
        this.myheaders = new Headers();
        this.myheaders.append('Access-Control-Allow-Origin', 'http://13.232.219.107:8082');
        let options = new RequestOptions({ headers: this.myheaders })

    }
    private employeeUrl = 'http://springapps:8080/employee-portal/api';
    getEmployees() {
        return this._http.get<IEmployee[]>(this.employeeUrl);
    }
    deleteEmployees(id) {
        return this._http.delete<IEmployee>(this.employeeUrl + "/" + id);
    }

    editEmployees(employee) {
        return this._http.put<IEmployee>(this.employeeUrl,employee);
    }
    getFilterData(searchValue) {

       return this._http.get<IEmployee[]>(this.employeeUrl+"/search/"+searchValue);

      
    }

    addEmployees(employee) {
        return this._http.post<IEmployee>(this.employeeUrl,employee);
    }
}
