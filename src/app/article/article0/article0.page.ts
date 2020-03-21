import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article0',
  templateUrl: './article0.page.html',
  styleUrls: ['./article0.page.scss'],
})
export class Article0Page {

  missions0: { mission0: string } =  { mission0: 'mission0' };
  gaps0: { gap0: string } =  { gap0: 'gap0' };
  details0: { detail0: string } =  { detail0: 'detail0' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(){
      console.log('ngOnInit');
      console.log(localStorage.missions0);
      // localStorage.missions0 = JSON.stringify(this.missions0);
      // localStorage.gaps0 = JSON.stringify(this.gaps0);
      // localStorage.details0 = JSON.stringify(this.details0);
      if (localStorage.missions0 ) {
        console.log('ngOnInit2');
        this.missions0 = JSON.parse(localStorage.missions0);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        if ('gaps0' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          this.gaps0 = JSON.parse(localStorage.gaps0);
          // this.details = JSON.parse(localStorage.details);
        }
        if ('details0' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          // this.gaps = JSON.parse(localStorage.gaps);
          this.details0 = JSON.parse(localStorage.details0);
        }
      }else{
        console.log('no missions') // for debug
      }
    }
 ngDoCheck() {
    if (localStorage.missions0) {
      console.log('compleate')
      this.missions0 = JSON.parse(localStorage.missions0);
      if ('gaps0' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps0 = JSON.parse(localStorage.gaps0);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details0' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details0 = JSON.parse(localStorage.details0);
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
          name: 'mission0',
          placeholder: 'ミッション',
          value: this.missions0.mission0
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions0 = { mission0: data.mission0 };
            localStorage.missions0 = JSON.stringify(this.missions0);
          }
        }
      ]
    });
    prompt.present();
  }
  async _renameGap() {
    const prompt = await this.alertController.create({
      header: '変更後のgap',
      inputs: [
        {
          name: 'gap0',
          placeholder: 'ギャップ',
          value: this.gaps0.gap0
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps0 = { gap0: data.gap0 };
            localStorage.gaps0 = JSON.stringify(this.gaps0);
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
          name: 'detail0',
          placeholder: '詳細フロー',
          value: this.details0.detail0
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details0 = { detail0: data.detail0 };
            localStorage.details0 = JSON.stringify(this.details0);
          }
        }
      ]
    });
    prompt.present();
  }
  
}
