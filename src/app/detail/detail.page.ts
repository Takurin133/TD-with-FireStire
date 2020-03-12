import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  tasks: { name: string }[] = [
    { name: 'タスク１' },
    { name: 'タスク２' },
  ];
  clickedItem: number;
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
  // Detail(t, $index){
  //   this.clickedItem = $index;
  // }
}
