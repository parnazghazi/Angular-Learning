import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() bill: User;
  constructor() { }

  ngOnInit() {
  }

}
