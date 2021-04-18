# Naming
## Symbols and file names

Do use consistent names for all assets named after what they represent.

Do use upper camel case for class names.

Do match the name of the symbol to the name of the file.

Do append the symbol name with the conventional suffix (such as Component, Directive, Module, Pipe, or Service) for a thing of that type.

Do give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.

Why? Consistent conventions make it easy to quickly identify and reference assets of different types.

```ts
@Component({ ... })
export class AppComponent { }
```

File Name: app.component.ts

```ts
@Directive({ ... })
export class ValidationDirective { }
```

File Name: validation.directive.ts

