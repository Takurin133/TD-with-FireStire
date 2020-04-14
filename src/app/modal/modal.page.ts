import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {Todo} from '../home/home.page';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage{

    // Data passed in by componentProps
    // @Input() firstName: string;
    // @Input() lastName: string;
    // @Input() middleInitial: string;
    todocollectionRef: AngularFirestoreCollection<Todo>;
    // todo: string;
    todos: Todo[];
// インターフェイスTodoの配列の型
  todo: Todo = { title :''}
    constructor(
      public modalCtrl: ModalController,
      public db: AngularFirestore) {
      // console.log(navParams.get('firstName'));
    }
    
  close() {
    this.modalCtrl.dismiss(null);
  }

  // save() {
  //   this.modalCtrl.dismiss(this.title);
  // }

  add(){
    this.todocollectionRef = this.db.collection<Todo>('todos', ref => ref);
    console.log(this.todo);
    
    this.todocollectionRef.add(this.todo);
    this.todo = {title:''};
    this.modalCtrl.dismiss(null);
  }
    //  closeModel(){
    //   this.modalCtrl.dismiss();
    // }
    // dismiss() {
    //   // using the injected ModalController this page
    //   // can "dismiss" itself and optionally pass back data
    //   this.modalCtrl.dismiss({
    //     'dismissed': true
    //   });
    // }
  // ngOnInit() {
  // }
  // up() {
  //   this.counter++;
  // }

  // down() {
  //   this.counter--;
  // }

  // save() {
  //   this.viewCtrl.dismiss(this.title);
  // }
}
