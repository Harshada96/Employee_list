import { Component, OnInit, ViewChild } from '@angular/core';
import { UserList } from '../user-list';
import {UserlistService} from '../userlist.service'
import * as _ from 'lodash';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users:UserList[]=[];
  @ViewChild('seach') seaech
  userDetails: any;
  constructor(private UserListService:UserlistService){}
  ngOnInit(){
    this.getUserData()
  }
/* . . . */

getUserData(){
  this.UserListService.getUserList().subscribe(
    response=>{console.log(response);this.users=response}
  )

}
getName(event){

let data=_.filter(this.users, { 'name': event });
 this.userDetails = data[0]

}

}
