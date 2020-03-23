import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/service.service';
import { Service } from 'app/Models/Service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddServiceComponent } from 'app/add-service/add-service.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services:Service[];

  constructor(private serviceService: ServiceService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getServices();
  }

  getServices():void{
    this.serviceService.getServices()
    .subscribe(
      data => {
        this.services = data;
        console.log(this.services);
      },
      error => {
        console.log(error);
      }
    );
  }

  onCreateNewService(){
    var dialogConfig = new MatDialogConfig();
    dialogConfig = this.dialogCofigurations();
    this.dialog.open(AddServiceComponent, dialogConfig);
  }
  dialogCofigurations(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="60%"
    return dialogConfig;
  }

  onEditClick(service:Service){
    var dialogConfig = new MatDialogConfig();
    dialogConfig = this.dialogCofigurations();
    this.dialog.open(AddServiceComponent,{data:service});
  }



 deleteService(id:number){
   this.serviceService.deleteService(id)
   .subscribe(()=>console.log("service deleted"),
   (err)=>console.log(err)
   );

 }

}
