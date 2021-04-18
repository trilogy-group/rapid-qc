# Components

## Decorate input and output properties

Do use the @Input() and @Output() class decorators instead of the inputs and outputs properties of the @Directive and @Component metadata:

Consider placing @Input() or @Output() on the same line as the property it decorates.

Why? It is easier and more readable to identify which properties in a class are inputs or outputs.

Why? If you ever need to rename the property or event name associated with @Input() or @Output(), you can modify it in a single place.

Why? The metadata declaration attached to the directive is shorter and thus more readable.

Why? Placing the decorator on the same line usually makes for shorter code and still easily identifies the property as an input or output. Put it on the line above when doing so is clearly more readable.

Examples of **incorrect** code for this rule:

```ts
/* avoid */

@Component({
  selector: 'toh-hero-button',
  template: `<button></button>`,
  inputs: [
    'label'
  ],
  outputs: [
    'heroChange'
  ]
})
export class HeroButtonComponent {
  heroChange = new EventEmitter<any>();
  label: string;
}
```

Examples of **correct** code for this rule:

```ts
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  @Output() heroChange = new EventEmitter<any>();
  @Input() label: string;
}
```
