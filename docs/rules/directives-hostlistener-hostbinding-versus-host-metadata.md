# Directives

## HostListener/HostBinding decorators versus host metadata

Consider preferring the @HostListener and @HostBinding to the host property of the @Directive and @Component decorators.

Do be consistent in your choice.

Why? The property associated with @HostBinding or the method associated with @HostListener can be modified only in a single place—in the directive's class. If you use the host metadata property, you must modify both the property/

```ts
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[tohValidator]',
})
export class ValidatorDirective {
  @HostBinding('attr.role') role = 'button';
  @HostListener('mouseenter') onMouseEnter() {
    // do work
  }
}
```

Compare with the less preferred host metadata alternative.

Why? The host metadata is only one term to remember and doesn't require extra ES imports.

```ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[tohValidator2]',
  host: {
    '[attr.role]': 'role',
    '(mouseenter)': 'onMouseEnter()',
  },
})
export class Validator2Directive {
  role = 'button';
  onMouseEnter() {
    // do work
  }
}
```
