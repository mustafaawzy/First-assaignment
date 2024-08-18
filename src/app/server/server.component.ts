import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  userName:string="mostafa";
  userNameStatus:boolean= true ;
  details:boolean=false;
  userNames:string[]=[];
  displayDetails(){    
    this.userNames.push(this.userName)
    return this.details=!this.details
  }
  
onresetUserName(){
  return this.userName=""
}

}