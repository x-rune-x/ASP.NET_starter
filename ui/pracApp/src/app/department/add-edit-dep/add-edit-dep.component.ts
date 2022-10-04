import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId:string="";
  DepartmentName:string=""

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentName;
    this.DepartmentId=this.dep.DepartmentId;
  }

  addDepartment() {
    var jsonVal = { 
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
     };
     this.service.addDepartment(jsonVal).subscribe(res => {
      alert(res.toString());
     });
  }

  updateDepartment() {
    var jsonVal = { 
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
     };
     this.service.updateDepartment(jsonVal).subscribe(res => {
      alert(res.toString());
     });
  }
}
