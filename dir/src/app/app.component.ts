import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  color: any;
  img0() {
    throw new Error('Method not implemented.');
  }
  img1() {
    throw new Error('Method not implemented.');
  }
  image0: any;
  image1: any;
  bl1!: { [klass: string]: any; } | null;
  gr1!: { [klass: string]: any; } | null;
  bla1!: { [klass: string]: any; } | null;
  yl1!: { [klass: string]: any; } | null;
  showBlue() {
    throw new Error('Method not implemented.');
  }
  showGreen() {
    throw new Error('Method not implemented.');
  }
  showBlack() {
    throw new Error('Method not implemented.');
  }
  showYellow() {
    throw new Error('Method not implemented.');
  }
  dataList: any;

  save(he: NgForm) {
    console.log(he.value)
  }

  title = 'the legend';
  day = new Date();
  pi: number = 3.14159265359;
  a = 891;
  b = 0.526;
  currentStyles: Record<string, string> = {};

  Save = true;
  isUnchanged = true;
  hi = true;

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.Save ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.hi ? '20px' : '12px',
    };

    // image0 = false;
    // image1 = true;

    // img0() {
    //   this.image0 = !this.image0;
    //   this.image1 = false
    // }
    // img1() {
    //   this.image1 = !this.image1;
    //   this.image0 = false
    // }

    // color: any;

    // bl1 = {};
    // gr1 = {};
    // bla1 = {}
    // yl1 = {}


    // showBlue() {
    //   this.bl1 = { 'background-color': 'blue' }
    //   this.gr1 = false
    //   this.bla1 = false
    //   this.yl1 = false
    // }

    // showGreen() {
    //   this.bl1 = false
    //   this.gr1 = { 'background-color': 'green' }
    //   this.bla1 = false
    //   this.yl1 = false
    // }

    // showBlack() {
    //   this.bl1 = false
    //   this.gr1 = false
    //   this.bla1 = { 'background-color': 'black' }
    //   this.yl1 = false
    // }

    // showYellow() {
    //   this.bl1 = false
    //   this.gr1 = false
    //   this.bla1 = false
    //   this.yl1 = { 'background-color': 'yellow' }
    // }

    // ngOnInit(): void {}

    // name = 'Angular 10';
    // dataList: Array<any> = [];
    // schedule: { branch: ''; };

    AppComponent.constructor() 
      this.dataList = [
        { code: 1, name: 'Nishanth' },
        { code: 2, name: 'Sameer' },
        { code: 3, name: 'Ram Kumar' },
        { code: 4, name: 'Aakash' },
        { code: 5, name: 'Jeeva' },
      ];
    }
  }



