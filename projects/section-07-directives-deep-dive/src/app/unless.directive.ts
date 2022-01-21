import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
// UnlessDirective is acting as the opposite of ngIf
export class UnlessDirective {

  // 'set' keyword to implement a setter. Turns this into a method even though technically still a property
  // Now a setter of the property which is executed whenever the property changes
  // Property changes whenever the condition we pass (or one of its parameters) change
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // TemplateRef is what we should render, ViewContainerRef is where we should render it
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
