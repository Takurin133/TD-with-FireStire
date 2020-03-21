import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article2',
  templateUrl: './article2.page.html',
  styleUrls: ['./article2.page.scss'],
})
export class Article2Page {
  missions2: { mission2: string } =  { mission2: 'mission2' };
  gaps2: { gap2: string } =  { gap2: 'gap2' };
  details2: { detail2: string } =  { detail2: 'detail2' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(){
      console.log('ngOnInit');
      // localStorage.missions2 = JSON.stringify(this.missions2);
      // localStorage.gaps2 = JSON.stringify(this.gaps2);
      // localStorage.details2 = JSON.stringify(this.details2);
      console.log(localStorage.missions2);
      if (localStorage.missions2 ) {
        console.log('ngOnInit2');
        this.missions2 = JSON.parse(localStorage.missions2);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        if ('gaps2' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          this.gaps2 = JSON.parse(localStorage.gaps2);
          // this.details = JSON.parse(localStorage.details);
        }
        if ('details2' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          // this.gaps = JSON.parse(localStorage.gaps);
          this.details2 = JSON.parse(localStorage.details2);
        }
      }else{
        console.log('no missions') // for debug
      }
    }
 ngDoCheck() {
    if ('missons2' in localStorage) {
      console.log('compleate')
      this.missions2 = JSON.parse(localStorage.missions2);
      if ('gaps2' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps2 = JSON.parse(localStorage.gaps2);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details2' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details2 = JSON.parse(localStorage.details2);
      }
    } 
  }

  async changeMission() {
    const actionSheet = await this.actionSheetController.create({
      header: 'missionの変更',
      buttons: [
        {
          text: '変更',
          icon: 'create',
          handler: () => {
            this._renameMission();
          }
        }, {
          text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }
  async changeGap() {
    const actionSheet = await this.actionSheetController.create({
      header: 'gapの変更',
      buttons: [
        {
          text: '変更',
          icon: 'create',
          handler: () => {
            this._renameGap();
          }
        }, {
          text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }
  async changeDetail() {
    const actionSheet = await this.actionSheetController.create({
      header: 'detailの変更',
      buttons: [
        {
          text: '変更',
          icon: 'create',
          handler: () => {
            this._renameDetail();
          }
        }, {
          text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }
  async _renameMission() {
    const prompt = await this.alertController.create({
      header: '変更後のmission',
      inputs: [
        {
          name: 'mission2',
          placeholder: 'ミッション',
          value: this.missions2.mission2
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions2 = { mission2: data.mission2 };
            localStorage.missions2 = JSON.stringify(this.missions2);
          }
        }
      ]
    });
    prompt.present();
  }
  async _renameGap() {
    const prompt = await this.alertController.create({
      header: '変更後のmission',
      inputs: [
        {
          name: 'gap2',
          placeholder: 'gap',
          value: this.gaps2.gap2
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps2= { gap2: data.gap2 };
            localStorage.gaps2 = JSON.stringify(this.gaps2);
          }
        }
      ]
    });
    prompt.present();
  } 
  async _renameDetail() {
    const prompt = await this.alertController.create({
      header: '変更後のdetail',
      inputs: [
        {
          name: 'detail2',
          placeholder: '詳細フロー',
          value: this.details2.detail2
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details2 = { detail2: data.detail2 };
            localStorage.details2 = JSON.stringify(this.details2);
          }
        }
      ]
    });
    prompt.present();
  }
  
}
