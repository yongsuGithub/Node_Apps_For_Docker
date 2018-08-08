import { Component, OnInit } from '@angular/core';
//import { Employee } from './Employee';
import { IEmployee } from './IEmployee';
import { EmployeeService } from './EmployeeService';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent  implements OnInit {

  /*employeeList: any[] = [
    {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '2/26/1988'
    },
    {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '4/10/1980'
    },
];

 employeeList2: Employee[] = [
  {
      code: 'emp101', name: 'Tom', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '2/26/1988'
  },
  {
      code: 'emp102', name: 'Alex', gender: 'Male',
      annualSalary: 5700.95, dateOfBirth: '9/6/1982'
  },
  {
      code: 'emp103', name: 'Mike', gender: 'Male',
      annualSalary: 5900, dateOfBirth: '12/8/1979'
  },
  {
      code: 'emp104', name: 'Mary', gender: 'Female',
      annualSalary: 6500.826, dateOfBirth: '4/10/1980'
  },
];

employeeList3: IEmployee[] = [
    {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '2/26/1988'
    },
    {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '4/10/1980'
    },
  ];

}*/

employeerecords: IEmployee[];
  employeeDelete: IEmployee;
  editEmployeId: Number = 0;
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployee();

  }
  getEmployee() {
    this._employeeService.getEmployees()

      .subscribe(clientData => this.employeerecords = clientData);
  }
  filterEmployee(searchString) {
    if (searchString != null && searchString != '' && searchString != undefined) {
      this._employeeService.getFilterData(searchString).subscribe(clientData => {
        this.employeerecords = [];

         this.employeerecords = clientData
        
         
      });
    } else {
      this.getEmployee();
    }
  }
  openEdit(id) {

    this.editEmployeId = id;

  }
  openSubmit(employee) {
    //write to call http service
    this._employeeService.editEmployees(employee)

      .subscribe(clientData => {
        this.employeeDelete = clientData
        if (this.employeeDelete == null || this.employeeDelete == undefined) {
          this.message = "Employee not Edit, Server is down.";
        } else {
          this.message = "Employee Edited Successfully";
          this.getEmployee();
        }

      });
    this.editEmployeId = 0;
  }
  openCancel() {
    this.editEmployeId = 0;
  }
  message: String = "";
  openDelete(id) {
    this._employeeService.deleteEmployees(id)

      .subscribe(clientData => {
        this.employeeDelete = clientData
        if (this.employeeDelete == null || this.employeeDelete == undefined) {
          this.message = "Employee not delete, Server is down.";
        } else {
          this.message = "Employee deleted Successfully";
          this.getEmployee();
        }

      });
  }

  refreshdata(addSuccess){
    if(addSuccess==true){
      this.getEmployee();
    }

  }

}