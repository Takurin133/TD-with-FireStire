import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'タスク登録';
  tasks: { name: string }[] = [
    { name: 'タスク１' },
    { name: 'タスク２' },
  ];
  task: string;
  constructor() {}
//  ngOnInit(){
//    console.log(this.tasks);
//  }
  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      console.log('task 追加　in this page');
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  addTask() {
    this.tasks.push({
      name: this.task
    });
    console.log('tasks push');
    localStorage.tasks = JSON.stringify(this.tasks);
    console.log('task 空');
    this.task = '';
  }
}
