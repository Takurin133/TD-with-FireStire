import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
  openurl(i: string) {
    console.log(i);
    const url = '/article/article' + i;
    this.router.navigateByUrl(url);
  }
  // Detail(t, $index){
  //   this.clickedItem = $index;
  // }
}
