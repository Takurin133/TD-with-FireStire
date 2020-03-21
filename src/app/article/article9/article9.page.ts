import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article9',
  templateUrl: './article9.page.html',
  styleUrls: ['./article9.page.scss'],
})
export class Article9Page implements OnInit {
  missions9: { mission9: string } =  { mission9: 'mission9' };
  gaps9: { gap9: string } =  { gap9: 'gap9' };
  details9: { detail9: string } =  { detail9: 'detail9' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(){
      console.log('ngOnInit');
      // localStorage.missions9 = JSON.stringify(this.missions9);
      // localStorage.gaps9 = JSON.stringify(this.gaps9);
      // localStorage.details9 = JSON.stringify(this.details9);
      console.log(localStorage.missions9);
      if (localStorage.missions9 ) {
        console.log('ngOnInit2');
        this.missions9 = JSON.parse(localStorage.missions9);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        if ('gaps9' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          this.gaps9 = JSON.parse(localStorage.gaps9);
          // this.details = JSON.parse(localStorage.details);
        }
        if ('details9' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          // this.gaps = JSON.parse(localStorage.gaps);
          this.details9 = JSON.parse(localStorage.details9);
        }
      }else{
        console.log('no missions'); // for debug
      }
    }
 ngDoCheck() {
    if ('missons9' in localStorage) {
      console.log('compleate')
      this.missions9 = JSON.parse(localStorage.missions9);
      if ('gaps9' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps9 = JSON.parse(localStorage.gaps9);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details0' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details9 = JSON.parse(localStorage.details9);
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
          name: 'mission9',
          placeholder: 'ミッション',
          value: this.missions9.mission9
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions9 = { mission9: data.mission9 };
            localStorage.missions9 = JSON.stringify(this.missions9);
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
          name: 'gap9',
          placeholder: 'ギャップ',
          value: this.gaps9.gap9
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps9 = { gap9: data.gap9 };
            localStorage.gaps9 = JSON.stringify(this.gaps9);
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
          name: 'detail9',
          placeholder: '詳細フロー',
          value: this.details9.detail9
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details9 = { detail9: data.detail9 };
            localStorage.details9 = JSON.stringify(this.details9);
          }
        }
      ]
    });
    prompt.present();
  }
}
