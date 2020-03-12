import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article7',
  templateUrl: './article7.page.html',
  styleUrls: ['./article7.page.scss'],
})
export class Article7Page implements OnInit {
  missions7: { mission7: string } =  { mission7: 'mission1' };
  gaps7: { gap7: string } =  { gap7: 'gap1' };
  details7: { detail7: string } =  { detail7: 'detail１' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if ('missons7' in localStorage) {
      this.missions7 = JSON.parse(localStorage.missions7);
      this.gaps7 = JSON.parse(localStorage.gaps7);
      this.details7 = JSON.parse(localStorage.details7);
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
          name: 'mission7',
          placeholder: 'ミッション',
          value: this.missions7.mission7
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions7 = { mission7: data.mission7 };
            localStorage.missions7 = JSON.stringify(this.missions7);
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
          name: 'gap7',
          placeholder: 'ギャップ',
          value: this.gaps7.gap7
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps7 = { gap7: data.gap7 };
            localStorage.gaps7 = JSON.stringify(this.gaps7);
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
          name: 'detail7',
          placeholder: '詳細フロー',
          value: this.details7.detail7
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details7 = { detail7: data.detail7 };
            localStorage.details7 = JSON.stringify(this.details7);
          }
        }
      ]
    });
    prompt.present();
  }
}
