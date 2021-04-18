# Components

## Extract templates and styles to their own files

Do extract templates and styles into a separate file, when more than 3 lines.

Do name the template file [component-name].component.html, where [component-name] is the component name.

Do name the style file [component-name].component.css, where [component-name] is the component name.

Do specify component-relative URLs, prefixed with ./.

Why? Large, inline templates and styles obscure the component's purpose and implementation, reducing readability and maintainability.

Why? In most editors, syntax hints and code snippets aren't available when developing inline templates and styles. The Angular TypeScript Language Service (forthcoming) promises to overcome this deficiency for HTML templates in those editors that support it; it won't help with CSS styles.

Why? A component relative URL requires no change when you move the component files, as long as the files stay together.

Why? The ./ prefix is standard syntax for relative URLs; don't depend on Angular's current ability to do without that prefix.

Examples of **incorrect** code for this rule:

```ts

@Component({
  selector: 'toh-heroes',
  template: `
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes | async" (click)="selectedHero=hero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      </div>
    </div>
  `,
  styles: [`
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

 constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}

```

Examples of **correct** code for this rule:

```ts

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

```
```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
	imports: [
		BrowserModule,
	],
	declarations: [
		AppComponent,
		HeroesComponent
	],
	exports: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

```
```ts
import { Component } from '@angular/core';

import { HeroService } from './heroes';

@Component({
  selector: 'toh-app',
  template: '<toh-heroes></toh-heroes>',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {}
```
```ts
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from './shared';

@Component({
  selector: 'toh-heroes',
  template: '<pre>{{heroes | json}}</pre>'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
```
```ts
@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

 constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
```
```ts
<div>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes | async" (click)="selectedHero=hero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name | uppercase}} is my hero</h2>
  </div>
</div>
```
```ts
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
```
