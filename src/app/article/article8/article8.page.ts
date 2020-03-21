import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article8',
  templateUrl: './article8.page.html',
  styleUrls: ['./article8.page.scss'],
})
export class Article8Page implements OnInit {
  missions8: { mission8: string } =  { mission8: 'mission8' };
  gaps8: { gap8: string } =  { gap8: 'gap8' };
  details8: { detail8: string } =  { detail8: 'detail8' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(){
      console.log('ngOnInit');
      // localStorage.missions8 = JSON.stringify(this.missions8);
      // localStorage.gaps8 = JSON.stringify(this.gaps8);
      // localStorage.details8 = JSON.stringify(this.details8);
      console.log(localStorage.missions8);
      if (localStorage.missions8 ) {
        console.log('ngOnInit2');
        console.log(localStorage.missions8);
        this.missions8 = JSON.parse(localStorage.missions8);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        if ('gaps8' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          this.gaps8 = JSON.parse(localStorage.gaps8);
          // this.details = JSON.parse(localStorage.details);
        }
        if ('details8' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          // this.gaps = JSON.parse(localStorage.gaps);
          this.details8 = JSON.parse(localStorage.details8);
        }
      }else{
        console.log('no missions') // for debug
      }
    }
 ngDoCheck() {
    if ('missons8' in localStorage) {
      console.log('compleate')
      this.missions8 = JSON.parse(localStorage.missions8);
      if ('gaps8' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps8 = JSON.parse(localStorage.gaps8);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details8' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details8 = JSON.parse(localStorage.details8);
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
          name: 'mission8',
          placeholder: 'ミッション',
          value: this.missions8.mission8
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions8 = { mission8: data.mission8 };
            localStorage.missions8 = JSON.stringify(this.missions8);
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
          name: 'gap8',
          placeholder: 'ギャップ',
          value: this.gaps8.gap8
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps8 = { gap8: data.gap8 };
            localStorage.gaps8 = JSON.stringify(this.gaps8);
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
          name: 'detail8',
          placeholder: '詳細フロー',
          value: this.details8.detail8
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details8 = { detail8: data.detail8 };
            localStorage.details8 = JSON.stringify(this.details8);
          }
        }
      ]
    });
    prompt.present();
  }
}
