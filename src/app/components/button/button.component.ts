import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string
  @Input() textColor: string
  @Input() backgroundColor: string
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick():void {
    this.btnClick.emit();
    console.log("I just got clicked !")

  }

}