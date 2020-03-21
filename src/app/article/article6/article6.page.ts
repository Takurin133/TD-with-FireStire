import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article6',
  templateUrl: './article6.page.html',
  styleUrls: ['./article6.page.scss'],
})
export class Article6Page implements OnInit {
  missions6: { mission6: string } =  { mission6: 'mission6' };
  gaps6: { gap6: string } =  { gap6: 'gap6' };
  details6: { detail6: string } =  { detail6: 'detail6' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(){
      console.log('ngOnInit');
      console.log(this.gaps6);
      // localStorage.missions6 = JSON.stringify(this.missions6);
      // localStorage.gaps6 = JSON.stringify(this.gaps6);
      // localStorage.details6 = JSON.stringify(this.details6);
      console.log(localStorage.missions6);
      if (localStorage.missions6 ) {
        console.log('ngOnInit2');
        this.missions6 = JSON.parse(localStorage.missions6);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        if ('gaps6' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          this.gaps6 = JSON.parse(localStorage.gaps6);
          // this.details = JSON.parse(localStorage.details);
        }
        if ('details6' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          // this.gaps = JSON.parse(localStorage.gaps);
          this.details6 = JSON.parse(localStorage.details6);
        }
      }else{
        console.log('no missions') // for debug
      }
    }
 ngDoCheck() {
    if ('missons6' in localStorage) {
      console.log('compleate')
      this.missions6 = JSON.parse(localStorage.missions6);
      if ('gaps6' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps6 = JSON.parse(localStorage.gaps6);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details6' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details6 = JSON.parse(localStorage.details6);
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
          name: 'mission6',
          placeholder: 'ミッション',
          value: this.missions6.mission6
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions6 = { mission6: data.mission6 };
            localStorage.missions6 = JSON.stringify(this.missions6);
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
          name: 'gap6',
          placeholder: 'ギャップ',
          value: this.gaps6.gap6
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps6 = { gap6: data.gap6 };
            localStorage.gaps6 = JSON.stringify(this.gaps6);
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
          name: 'detail6',
          placeholder: '詳細フロー',
          value: this.details6.detail6
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details6 = { detail6: data.detail6 };
            localStorage.details6 = JSON.stringify(this.details6);
          }
        }
      ]
    });
    prompt.present();
  }
}
