import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string
  @Input() textColor: string
  @Input() backgroundColor: string

  constructor() {}

  ngOnInit() {}

  onClick():void {
    console.log("I just got clicked !")
  }

}