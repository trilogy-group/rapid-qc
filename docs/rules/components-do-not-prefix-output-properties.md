# Components

## Don't prefix output properties

Do name events without the prefix on.

Do name event handler methods with the prefix on followed by the event name.

Why? This is consistent with built-in events such as button clicks.

Why? Angular allows for an alternative syntax on-\*. If the event itself was prefixed with on this would result in an on-onEvent binding expression.

Examples of **incorrect** code for this rule:

```ts
/* avoid */

@Component({
  selector: 'toh-hero',
  template: `...`,
})
export class HeroComponent {
  @Output() onSavedTheDay = new EventEmitter<boolean>();
}
```

```ts

/* avoid */

<toh-hero (onSavedTheDay)="onSavedTheDay($event)"></toh-hero>

```

Examples of **correct** code for this rule:

```ts
export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}
```

```ts

<toh-hero (savedTheDay)="onSavedTheDay($event)"></toh-hero>

```
