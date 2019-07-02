import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isallowNewUser=false;
  servername="";
  servercreated=false;
  servercreationstatus="No server is created";
  constructor() {

          setTimeout(() => {

            this.isallowNewUser=true;
          },2000)

   }

  ngOnInit() {
  }

  oncreateserver(){
    this.servercreated=true;
    this.servercreationstatus="Server was created";
  }
  showeservername(event: any){
          this.servername=(<HTMLInputElement>event.target).value;
  }

}
