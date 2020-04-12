import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

export interface ITodo {
  Mission: string;
  gap: string;
  detail: string;
}
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  todoDoc: AngularFirestoreDocument<ITodo>;
//　↑Todo型でAngularFirestoreDocumentオブジェクトを使って [アンビエント宣言]
  constructor(public af: AngularFirestore) { }

  TodoInit(tid:string): Promise<ITodo>{
    this.todoDoc = this.af.doc<ITodo>('todos/'+ tid);
    // todoのtidのドキュメント（rxjsと同じ型）
    return this.todoDoc.valueChanges().pipe(first()).toPromise(Promise);
  }

  // todo情報更新メソッド
  todoSet(todo: ITodo): Promise<void>{
    return this.todoDoc.set(todo)
  }
}
