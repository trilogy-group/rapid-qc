# Components

## Avoid aliasing inputs and outputs

Avoid input and output aliases except when it serves an important purpose.

Why? Two names for the same property (one private, one public) is inherently confusing.

Why? You should use an alias when the directive name is also an input property, and the directive name doesn't describe the property.

Examples of **incorrect** code for this rule:

```ts
/* avoid pointless aliasing */

@Component({
  selector: 'toh-hero-button',
  template: `<button>{{ label }}</button>`,
})
export class HeroButtonComponent {
  // Pointless aliases
  @Output('heroChangeEvent') heroChange = new EventEmitter<any>();
  @Input('labelAttribute') label: string;
}
```

```ts

<!-- avoid -->

<toh-hero-button labelAttribute="OK" (changeEvent)="doSomething()">
</toh-hero-button>

```

Examples of **correct** code for this rule:

```ts
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{ label }}</button>`,
})
export class HeroButtonComponent {
  // No aliases
  @Output() heroChange = new EventEmitter<any>();
  @Input() label: string;
}
```

```ts
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[heroHighlight]' })
export class HeroHighlightDirective implements OnChanges {
  // Aliased because `color` is a better property name than `heroHighlight`
  @Input('heroHighlight') color: string;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }
}
```

```ts
<toh-hero-button label="OK" (change)="doSomething()">
</toh-hero-button>

<!-- `heroHighlight` is both the directive name and the data-bound aliased property name -->
<h3 heroHighlight="skyblue">The Great Bombasto</h3>
```
