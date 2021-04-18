# Template
## No Negated Async

Async pipes should not be negated.
Use (observable | async) === (false | null | undefined) to check its value instead or expose
negative value from Facade

Angular’s async pipes emit null initially, prior to the observable emitting any values, or the promise resolving.
This can cause negations, like *ngIf=”!(myConditional | async)” to thrash the layout and cause expensive side-effects
like firing off XHR requests for a component which should not be shown.