# Single Responsibility
## Rule of One

Do define one thing, such as a Service, Facade, State, Model, Component, etc. per file.  
The key is to make the code more reusable, easier to read, and less mistake prone.  
As the app grows, this rule becomes even more important.

Why?
- One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.
- One component per file avoids hidden bugs that often arise when combining components in a file where they may share variables, create unwanted closures, or unwanted coupling with dependencies.
- A single component can be the default export for its file which facilitates lazy loading with the router.

Examples of **incorrect** code for this rule:

```ts

import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'app-root',
	template: '<h1>{{title}}</h1><pre>{{heroes | json}}</pre>',
	styleUrls: ['app/app.component.css']
})
class AppComponent implements OnInit {
	title = 'Tour of Heroes';

	heroes: Hero[] = [];

	ngOnInit() {
		getHeroes().then(heroes => (this.heroes = heroes));
	}
}

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent],
	exports: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

const HEROES: Hero[] = [
	{ id: 1, name: 'Bombasto' },
	{ id: 2, name: 'Tornado' },
	{ id: 3, name: 'Magneta' }
];

function getHeroes(): Promise<Hero[]> {
	return Promise.resolve(HEROES); // TODO: get hero data from the server;
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
import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
```
```ts
export interface Hero {
  id: number;
  name: string;
}
```
```ts
import { Hero } from './hero.model';

export const HEROES: Hero[] = [
  { id: 1, name: 'Bombasto' },
  { id: 2, name: 'Tornado' },
  { id: 3, name: 'Magneta' }
];
```
## File Size: 

Consider limiting files to 400 lines of code.