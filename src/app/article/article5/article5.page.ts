import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article5',
  templateUrl: './article5.page.html',
  styleUrls: ['./article5.page.scss'],
})
export class Article5Page implements OnInit {
  missions5: { mission5: string } =  { mission5: 'mission1' };
  gaps5: { gap5: string } =  { gap5: 'gap1' };
  details5: { detail5: string } =  { detail5: 'detail１' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if ('missons5' in localStorage) {
      this.missions5 = JSON.parse(localStorage.missions5);
      this.gaps5 = JSON.parse(localStorage.gaps5);
      this.details5 = JSON.parse(localStorage.details5);
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
          name: 'mission5',
          placeholder: 'ミッション',
          value: this.missions5.mission5
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions5 = { mission5: data.mission5 };
            localStorage.missions5 = JSON.stringify(this.missions5);
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
          name: 'gap5',
          placeholder: 'ギャップ',
          value: this.gaps5.gap5
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps5 = { gap5: data.gap5 };
            localStorage.gaps5 = JSON.stringify(this.gaps5);
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
          name: 'detail5',
          placeholder: '詳細フロー',
          value: this.details5.detail5
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details5 = { detail5: data.detail5 };
            localStorage.details5 = JSON.stringify(this.details5);
          }
        }
      ]
    });
    prompt.present();
  }
  
}
