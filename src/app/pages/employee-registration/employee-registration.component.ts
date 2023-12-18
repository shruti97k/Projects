import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  msg:string="";
  departments:any[]=[];
  isListView:boolean=true;
  employeeList:any[]=[];
  employeeObject:any={
            "firstName":"",
            "lastName":"",
            "department":"",
            "departmentId":"",
            "gender":"",
            "email":"",
            "phoneNo":""
  }

  //dependancy injection
   constructor(private http:HttpClient){

}

  ngOnInit(): void {
    this.loadDepartmanet();
    this.loadEmployee();
    
  }
  loadDepartmanet(){
    this.http.get("http://localhost:55028/assets/department.json").subscribe((res:any)=>{
    
      console.log("departmentResponse:",res)
      this.departments=res.departments;
      console.log(this.departments);
    })
  }
  loadEmployee(){
    this.http.get("http://localhost:55028/assets/getemployee.json").subscribe((res:any)=>{
    
      console.log("employeelist:",res)
     this.employeeList=res.data;
     console.log(this.employeeList);

    })
  }
  onCreateEmp(){
    // this.http.post("assets/postEmployee.json",this.employeeObject).subscribe({ 
    //   next:(resp)=>{ 
    //     this.msg ="Record is inserted";
    //   },
    //   error:(err)=>{ }
    this.http.get("assets/postEmployee.json").subscribe((res:any)=>{
      alert(res.message);
      this.loadEmployee();

    })
  }
  onEdit(item:any){
 
    this.employeeObject=item;
    this.isListView=false;
  }

  onDelete(item:any){
    debugger;
   

  }
}
