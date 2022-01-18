import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // Wrapped in [] to make it an attribute because then you won't have to use [] when you add appBasicHighlight to an element
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // Need access to the element the directive sits on. Angular gives this access by injecting the element the directive sits on into this directive
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}