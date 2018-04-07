import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HttpHeaderResponse} from '@angular/common/http';
import {HEROES} from '../HEROES';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Winstorm'
  // };

  // hero = new Hero();
  heroes = HEROES;

  constructor() {
    // this.hero.id = 1;
    // this.hero.name = 'Winstorm';
  }

  ngOnInit() {
  }

}
