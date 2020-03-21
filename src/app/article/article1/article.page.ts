import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage  {
  missions: { mission: string } =  { mission: 'mission1' };
  gaps: { gap: string } =  { gap: 'gap1' };
  details: { detail: string } =  { detail: 'detail1' };

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

  ngOnInit(){
    console.log('ngOnInit');
    // localStorage.missions = JSON.stringify(this.missions);
    // localStorage.gaps = JSON.stringify(this.gaps);
    // localStorage.details = JSON.stringify(this.details);
    console.log(localStorage.missions);
    if (localStorage.missions ) {
      console.log('ngOnInit2');
      this.missions = JSON.parse(localStorage.missions);
      // missions.mission(↑のmissionsの中のmissionキーを参照する)
     
      if ('gaps' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        this.gaps = JSON.parse(localStorage.gaps);
        // this.details = JSON.parse(localStorage.details);
      }
      if ('details' in localStorage) {
        // this.missions = JSON.parse(localStorage.missions);
        // this.gaps = JSON.parse(localStorage.gaps);
        this.details = JSON.parse(localStorage.details);
      }      // this.gaps = JSON.parse(localStorage.gaps);
      // this.details = JSON.parse(localStorage.details);
    }else{
      console.log('no missions') // for debug
    }
  }
    ngDoCheck() {
    if ('missons' in localStorage) {
      console.log('ionViewwillEmter')
      this.missions = JSON.parse(localStorage.missions);
      // missions.mission(↑のmissionsの中のmissionキーを参照する)
      // this.gaps = JSON.parse(localStorage.gaps);
      // this.details = JSON.parse(localStorage.details);
    }
    if ('gaps' in localStorage) {
      // this.missions = JSON.parse(localStorage.missions);
      this.gaps = JSON.parse(localStorage.gaps);
      // this.details = JSON.parse(localStorage.details);
    }
    if ('details' in localStorage) {
      // this.missions = JSON.parse(localStorage.missions);
      // this.gaps = JSON.parse(localStorage.gaps);
      this.details = JSON.parse(localStorage.details);
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
            console.log('change gap');
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
          name: 'mission',
          placeholder: 'ミッション',
          value: this.missions.mission
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.missions = { mission: data.mission };
            console.log(this.missions.mission);
            localStorage.missions = JSON.stringify(this.missions); // missions.mission?
            console.log('missions　追加');
          }
        }
      ]
    });
    prompt.present();
  }
  async _renameGap() {
    const promptG = await this.alertController.create({
      header: '変更後のmission',
      inputs: [
        {
          name: 'gap',
          placeholder: 'gap',
          value: this.gaps.gap
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.gaps = { gap: data.gap };
            localStorage.gaps = JSON.stringify(this.gaps);
          }
        }
      ]
    });
    promptG.present();
    
  } 
  async _renameDetail() {
    const prompt = await this.alertController.create({
      header: '変更後のdetail',
      inputs: [
        {
          name: 'detail',
          placeholder: '詳細フロー',
          value: this.details.detail
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.details = { detail: data.detail };
            localStorage.details = JSON.stringify(this.details);
          }
        }
      ]
    });
    prompt.present();
  }
}
