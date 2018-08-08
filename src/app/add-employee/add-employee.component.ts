import { Component, OnInit } from '@angular/core';

import { DialogComponent } from "src/app/dialog/dialog.component";
import { EmployeeService } from "src/app/table/EmployeeService";
import { IEmployee } from "src/app/table/IEmployee";
import { EmpDTO } from "src/app/table/EmpDTO";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addSuccess:boolean=false;

  @Output()
  addSuccessEvent:EventEmitter<boolean>= new EventEmitter();

display: boolean = false;

employee: IEmployee;
 message: String = "";
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee=new EmpDTO();
  }

  addEmployeeDialog(){
   this.display = true;

  }
  closepopup(){
     this.display = false;
       this.employee=new EmpDTO();
  }
  submitpopup(employee){
    this._employeeService.addEmployees(employee)

      .subscribe(clientData => {
        this.employee = clientData
        if (this.employee == null || this.employee == undefined) {
          this.message = "Employee not added, Server is down.";
          this.addSuccessEvent.emit(this.addSuccess);
        } else {
          this.message = "Employee added Successfully";
          this.addSuccess=true;
          this.addSuccessEvent.emit(this.addSuccess);
          
        }

      });
    

    this.display = false;
  }

}
