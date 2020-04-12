import { Component, OnInit } from '@angular/core';
// import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';
import { ModalController, NavController } from '@ionic/angular';
import { Todo } from '../home/home.page'
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})

// interface Todos {
//   id: string;
//   title: string;
// }
export class TaskListPage implements OnInit {
  tasks: { name: string }[] = [
    { name: 'タスク１' },
    { name: 'タスク２' },
  ];

  // Collection を扱うプロパティ　↓
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  // todoCollection: AngularFirestoreCollection<Todos>;
  todos: Todo[];
  todo: Todo = { title: '' };
  // todoの更新しなければ（firestoreからとってくる）
 title: string[];
 isEdit: boolean;
  // todos: {title: string}[]=[
  //   {title: ''},
  //   {title: '2'},
  // ]
  constructor(
    // public actionSheetController: ActionSheetController,
    public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public db: AngularFirestore,
  ) { 
    // this.title = todo.title;
    // console.log(this.title);
    this.isEdit = false;
    // 'todos'Collection(ジェネリック型はTodo！)への参照パス(いわゆるクエリ)
    this.todoCollectionRef = this.db.collection<Todo>('todos', ref => ref);
  }

  ngOnInit() {
    // 全件取得
    
    console.log(this.todoCollectionRef);
    // 変更あればデータ更新
    const todosObservable = this.todoCollectionRef.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log(id);
          console.log(data);
          // console.log(this.id);
          return { id, ...data };
        });
      })
    );
    console.log(todosObservable);
    // 
    todosObservable.subscribe(
      todos => this.todos = todos//これでタスク一覧のtodos取得してるんだ！！
      // x => console.log(x)
    //  console.log(this.todos);
      );
  // おそらくtodosコレクションを引数としてとってthis.todosに代入してる。todosは{title: ""}[]と型定義してるのでOK
  }

  ionViewWillEnter(id: string, data: string) {
    // console.log(id);
    // console.log(data);
    // if ('tasks' in localStorage) {
    //   console.log('tasks 追加');
    //   this.tasks = JSON.parse(localStorage.tasks);
    // }
  }
  
  async onButtonClicked() {
    // モーダルダイアログを準備
    const modal = await this.modalCtrl.create({
    component:ModalPage
  });

    // モーダルダイアログを実際に表示
    return await modal.present();
  }
  // async changeTask( id: string) {
  //   const snapshot = await this.todoCollection.valueChanges();
  //   console.log(snapshot);
  //   // console.log(todosObservabal.data);
  //   // this.todo = { title: }
  //   console.log(this.todo);// kara
  //   // console.log(this.title); //undefined
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'タスクの変更',
  //     buttons: [
  //       {
  //         text: '削除',
  //         role: 'destructive',
  //         icon: 'trash',
  //         handler: () => {
  //           // this.tasks.splice(index, 1);
  //           // localStorage.tasks = JSON.stringify(this.tasks);
  //           this.remove(id);
  //           // this.remove(todo.id); これだとエラーになる（やっぱngOnInitで定義してるからや）
  //         }
  //       }, {
  //         text: '変更',
  //         icon: 'create',
  //         handler: () => {
  //           // this._renameTask(index);
  //           // console.log(data);
  //           // this.updateTodo(data);
  //         }
  //       }, {
  //         text: '閉じる',
  //         icon: 'close',
  //         role: 'cancel',
  //         handler: () => {
  //           // console.log(todo.id);
  //           // console.log(this.todoCollection.doc.data());
  //           console.log('Cancel clicked');
  //         }
  //       },
  //     //   {
  //     //     text: '詳細',
  //     //     icon: 'arrow-forward-outline',
  //     //     handler: () => {
  //     //       this.router.navigateByUrl('/article');
  //     //     }
  //     // },
  //     ]
  //   });
  //   actionSheet.present();
  // }

  toggleEditComment(todo: Todo): void {
    todo.isEdit = !todo.isEdit;
    }

  updateTodo(todo: Todo): void {
    console.log(todo.id);

    // this.title = '';　//renameTaskのとこでやる。
    this.todoCollectionRef.doc(todo.id).update(
      // {title: this.title}
      this.todo
      );
  }

  remove(todo: Todo){
    console.log(todo.id);
    // console.log(this.todoCollection.doc(id).get);

    this.todoCollectionRef.doc(todo.id).delete();
  }

//   async _renameTask(id: string) {
//     const snapshot = await this.todoCollection.doc(id).get();
//     // console.log(snapshot.id);
//     // console.log(snapshot.data());
//     // console.log(snapshot.get('title'))
//     const prompt = await this.alertController.create({
//       header: '変更後のタスク',
//       inputs: [
//         {
//           name: 'task',
//           placeholder: 'タスク',
//           value: this.todoCollection.doc(id).get()//koko!!
//         },
//       ],
//       buttons: [
//         {
//           text: '閉じる'
//         },
//         {
//           text: '保存',
//           handler: data => {
//             // this.todo = 
//             // this.tasks[index] = { title: data.task };// 
//             // localStorage.tasks = JSON.stringify(this.tasks);
//           }
//         }
//       ]
//     });
//     prompt.present();
//   }
// }

// export interface Todo {
//   id?: string, // Firestore document の ID
//   title: string,
}
