import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActivityPage} from '../activity/activity';
import {NewactivityPage}from '../newactivity/newactivity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addedToDoList:any[]=[];
  tempTodo:any='';
  todoPage = NewactivityPage;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public storage:Storage) {
    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedToDoList=val;
      }
    );
  }
testObj = {
  "title":"",
  "description":""

};

ngOnInit():void{
  this.storage.get(this.addedToDoList).then(
    (val)=>{
      this.addedToDoList=val;
    }
  );
}
ionViewWillEnter(){
  this.storage.get('todoDetails').then((val)=>{
    this.addedToDoList = val;
  });
}

ionViewDidEnter(){
  this.storage.get('todoDetails').then((val)=>{
    this.addedToDoList = val;
  });
}


}
