import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article3',
  templateUrl: './article3.page.html',
  styleUrls: ['./article3.page.scss'],
})
export class Article3Page implements OnInit {
  missions3: { mission3: string } =  { mission3: 'mission1' };
  gaps3: { gap3: string } =  { gap3: 'gap1' };
  details3: { detail3: string } =  { detail3: 'detail１' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit() { 
      console.log('ngOnInit');
      // localStorage.missions3 = JSON.stringify(this.missions3);
      // localStorage.gaps3 = JSON.stringify(this.gaps3);
      // localStorage.details3 = JSON.stringify(this.details3);
      console.log(localStorage.missions3);
      if (localStorage.missions3 ) {
        console.log('ngOnInit2');
        this.missions3 = JSON.parse(localStorage.missions3);
        // missions.mission(↑のmissionsの中のmissionキーを参照する)
        if ('gaps3' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          this.gaps3 = JSON.parse(localStorage.gaps3);
          // this.details = JSON.parse(localStorage.details);
        }
        if ('details3' in localStorage) {
          // this.missions = JSON.parse(localStorage.missions);
          // this.gaps = JSON.parse(localStorage.gaps);
          this.details3 = JSON.parse(localStorage.details3);
        }
      }else{
        console.log('no missions') // for debug
      }
    }
 ngDoCheck() {
    if (localStorage.missions3) {
      console.log('compleate');
      this.missions3 = JSON.parse(localStorage.missions3);
      if ('gaps3' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps3 = JSON.parse(localStorage.gaps3);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details3' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details3 = JSON.parse(localStorage.details3);
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
          name: 'mission3',
          placeholder: 'ミッション',
          value: this.missions3.mission3
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions3 = { mission3: data.mission3 };
            localStorage.missions3 = JSON.stringify(this.missions3);
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
          name: 'gap3',
          placeholder: 'ギャップ',
          value: this.gaps3.gap3
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps3 = { gap3: data.gap3 };
            localStorage.gaps3 = JSON.stringify(this.gaps3);
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
          name: 'detail3',
          placeholder: '詳細フロー',
          value: this.details3.detail3
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details3 = { detail3: data.detail3 };
            localStorage.details3 = JSON.stringify(this.details3);
          }
        }
      ]
    });
    prompt.present();
  }
  
}
