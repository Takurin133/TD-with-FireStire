import { Component } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ModalController, NavController } from '@ionic/angular';
import {ModalPage} from '../modal/modal.page'
import { ElementFinder } from 'protractor';

export interface Todo {
  id?: string, //firestore documentのID 
  title: string,
  isEdit?: boolean;
  mission?: string;
  gap?: string;
  detail?: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements Todo{
  id?: string; //firestore documentのID 
  title: string;
  isEdit?: boolean;
  


  title1 = 'タスク登録';
  tasks: { name: string }[] = [
    { name: 'タスク１' },
    { name: 'タスク２' },
  ];
  task: string;
  edit: boolean;
  todocollectionRef: AngularFirestoreCollection<Todo>;
  // 取得したコレクションを格納(型定義？)
  todos: Todo[];
// インターフェイスTodoの配列の型
  todo: Todo = { title :'', isEdit: false}
  // todoの変数代入（現在は↑の情報のみ）

  constructor(public db: AngularFirestore, public modalCtrl: ModalController ) {
    // this.id = id;
    // this.title = title;
    this.edit = false;
      // a ref to the Todo collection(コレクションへの参照を作成)
 　 
  }


//  ngOnInit(){
//    console.log(this.tasks);
//  }

ngOnInit(){
  console.log('ngOnInit');
  console.log(this.todo);
  this.todocollectionRef = this.db.collection<Todo>('todos', ref => ref);
  console.log(this.todocollectionRef);
  // 変更あればデータ更新
  const todosObservable = this.todocollectionRef.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
  todosObservable.subscribe(todos => this.todos = todos);
  todosObservable.subscribe(todos => console.log(todos));
  }

  // add(){
  //   console.log(this.todo);
    
  //   this.todocollectionRef.add(this.todo);
  //   this.todo = {title:''};
  // }

  // remove(id:string){
  //   console.log(id);
  //   // console.log(t.title);
  //   this.todocollectionRef.doc(id).delete();
  // }
// <=>同値だぜ！！
  remove(todo:Todo){
    console.log(todo.id);
    console.log(todo.title);
    this.todocollectionRef.doc(todo.id).delete();
  }

  // update(todo:Todo) {
  //   this.todocollectionRef.doc(todo.id).update(
  //     this.todo.title = 
  //     );
  // }

  toggleEditComment(todo: Todo): void { // 追加
    todo.isEdit = (!todo.isEdit);
    console.log(todo.isEdit);
    this.edit = !this.edit;
  }

  async onButtonClicked() {
    // モーダルダイアログを準備
    const modal = await this.modalCtrl.create({
    component:ModalPage,
    cssClass: 'modal'
 
  });

    // モーダルダイアログを実際に表示
    return await modal.present();
  }

  save(todo: Todo){
    // console.log(todo.mission);
    if(!todo.mission){
      todo.mission = " ";
    }
    if(!todo.gap){
      todo.gap = " ";
    }
    if(!todo.detail){
      todo.detail = "";
    }
    this.todocollectionRef.doc(todo.id).update({
      mission: todo.mission,
      gap: todo.gap,
      detail: todo.detail
    });
    todo.isEdit = !todo.isEdit;
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      console.log('task 追加　in this page');
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  // addTask() {
  //   this.tasks.push({
  //     name: this.task
  //   });
  //   console.log('tasks push');
  //   localStorage.tasks = JSON.stringify(this.tasks);
  //   console.log('task 空');
  //   this.task = '';
  // }
}