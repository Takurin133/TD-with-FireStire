import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article8',
  templateUrl: './article8.page.html',
  styleUrls: ['./article8.page.scss'],
})
export class Article8Page implements OnInit {
  missions8: { mission8: string } =  { mission8: 'mission1' };
  gaps8: { gap8: string } =  { gap8: 'gap1' };
  details8: { detail8: string } =  { detail8: 'detail１' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if ('missons8' in localStorage) {
      this.missions8 = JSON.parse(localStorage.missions8);
      this.gaps8 = JSON.parse(localStorage.gaps8);
      this.details8 = JSON.parse(localStorage.details8);
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
