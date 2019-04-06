import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActivityPage} from '../activity/activity';
import {NewactivityPage}from '../newactivity/newactivity';
import { removeArrayItem } from 'ionic-angular/umd/util/util';

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

goToAddTodo():void{
  this.navCtrl.push(NewactivityPage);
}

removeArrayItem(todo):void{
  let index = this.addedToDoList.indexOf(todo);
  if(index>-1){
    this.addedToDoList.splice(index,1);
    this.storage.set('todoDetails',this.addedToDoList);
  }
}


}
