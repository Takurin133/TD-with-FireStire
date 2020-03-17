import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article4',
  templateUrl: './article4.page.html',
  styleUrls: ['./article4.page.scss'],
})
export class Article4Page implements OnInit {
  missions4: { mission4: string } =  { mission4: 'mission1' };
  gaps4: { gap4: string } =  { gap4: 'gap1' };
  details4: { detail4: string } =  { detail4: 'detail4' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(){
      console.log('ngOnInit');
      localStorage.missions4 = JSON.stringify(this.missions4);
      localStorage.gaps4 = JSON.stringify(this.gaps4);
      localStorage.details4 = JSON.stringify(this.details4);
      console.log(localStorage.missions4);
      if (localStorage.missions4 ) {
        console.log('ngOnInit2');
        this.missions4 = JSON.parse(localStorage.missions4);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        this.gaps4 = JSON.parse(localStorage.gaps4);
        this.details4 = JSON.parse(localStorage.details4);
      }else{
        console.log('no missions') // for debug
      }
    }
 ngDoCheck() {
    if ('missons4' in localStorage) {
      // console.log('compleate')
      this.missions4 = JSON.parse(localStorage.missions4);
      if ('gaps4' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps4 = JSON.parse(localStorage.gaps4);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details4' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details4 = JSON.parse(localStorage.details4);
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
          name: 'mission4',
          placeholder: 'ミッション',
          value: this.missions4.mission4        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions4 = { mission4: data.mission4 };
            localStorage.missions4 = JSON.stringify(this.missions4);
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
          name: 'gap4',
          placeholder: 'ギャップ',
          value: this.gaps4.gap4
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps4 = { gap4: data.gap4 };
            localStorage.gaps4 = JSON.stringify(this.gaps4);
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
          name: 'detail4',
          placeholder: '詳細フロー',
          value: this.details4.detail4
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details4 = { detail4: data.detail };
            localStorage.details4 = JSON.stringify(this.details4);
          }
        }
      ]
    });
    prompt.present();
  }
  
}
