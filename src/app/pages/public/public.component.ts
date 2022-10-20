import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.less']
})
export class PublicComponent implements OnInit {

  @ViewChild('main') Main!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  signUpBtn(){
    this.Main.nativeElement.classList.add('right-panel-active');
  }

  signInBtn(){
    this.Main.nativeElement.classList.remove('right-panel-active');
  }
}
