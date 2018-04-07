import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HttpHeaderResponse} from '@angular/common/http';
import {HEROES} from '../HEROES';
import {HeroService} from '../hero.service';

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
  selectedHero: Hero;

  // 2) 서비스를 생성자로 주입
  // private : 멤버 변수로 등록
  constructor(private heroService: HeroService) {
    // this.hero.id = 1;
    // this.hero.name = 'Winstorm';
  }

  ngOnInit() {
    // 서비스 호출
    // 1) 잘못된 방법. 의존성이 생긴다. 컴포넌트가 서비스를 제어
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    this.heroService.getHeroes()
      .subscribe(data=>{
        this.heroes = data;
      })
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
