import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { User } from 'app/Models/User';
import { error } from 'protractor';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  all_users:User[];
  mySubscription: any;

  constructor(private userService:UserService, private router:Router) {}
  
  ngOnInit() {
    this.getUsers()

  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(data=>{
      console.log(data);
      this.all_users=data;
      this.all_users.forEach(element => {
        element.is_accepted = (element.is_accepted==1)?true : false;
        element.is_enable = (element.is_enable==1)?true : false;
      });
    },error=>{
      console.log(error);
    })
  }

  changeStatus(username,state:boolean,attribute){
    console.log("uuuuu",username,status,attribute);
    this.userService.changeStatus(username,state,attribute).subscribe(data=>{  
      console.log(data);
      location.reload();
    },error=>{
        console.log("tttt",error);
    });
    
  }
}
