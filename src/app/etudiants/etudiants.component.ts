import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  mail:string = 'afif@gmail.com';
  listformation;
  listetudient;
  curantformation={id:-1}

  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
    this.httpclient.get("http://localhost:8888/formations")
      .subscribe(data=>{
        this.listformation=data;
      },err=>{
        console.log(err);
        }
        );
  }

  onGetEtuiant(f){
    this.curantformation=f
    this.httpclient.get("http://localhost:8888/formations/"+f.id+"/etudients")
      .subscribe(data=>{
          this.listetudient=data;
        },err=>{
          console.log(err);
        }
      );
  }



}
