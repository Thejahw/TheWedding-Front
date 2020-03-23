import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from 'app/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Service } from 'app/Models/Service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService,
    public dialogRef: MatDialogRef<AddServiceComponent>,@Inject(MAT_DIALOG_DATA)  public data:Service) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    if(!this.data)
      this.insertRecord(form);
    else
      this.updateRecord(form)
   
 }

 insertRecord(form:NgForm){
  this.serviceService.postPaymentDetail(form.value).subscribe(
    res=>{
      console.log("Posted");
      // this.toaster.success("Submitted successfully","New service");     
    },
    err=>{
      console.log(err);
    }
  )
  this.onClose(form);
  // form.resetForm();

 }
 updateRecord(form:NgForm){
  this.serviceService.editService(form.value).subscribe(
    res=>{
      console.log("updated");
      // this.toaster.success("Submitted successfully","New service"); 
    },
    err=>{
      console.log(err);
    }
  )
  this.onClose(form);
  // form.resetForm();
 }

  onClose(form?:NgForm){
    this.dialogRef.close();
  }

  onClear(form?:NgForm){
    form.resetForm();
  }


}
