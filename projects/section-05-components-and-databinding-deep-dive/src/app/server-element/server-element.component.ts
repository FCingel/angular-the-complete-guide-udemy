import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated              // Default so does not need to be added. Angular adds unique attributes to selectors for View Encapsulation
  // encapsulation: ViewEncapsulation.None               // Turn off View Encapsulation (no unique attributes added)
  // encapsulation: ViewEncapsulation.ShadowDom          // uses the native Shadow DOM for the same functionality as 'Emulated' 
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};      // not used anymore. Kept for example
  @Input() name: string;
  @ViewChild('heading', {static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {    
    console.log('ngOnChanges called! changes:');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);       // will be empty since ngAfterViewInit has not run so it is not rendered to the DOM yet
    console.log('Text Content of ContentChild paragraph: ', this.paragraph.nativeElement.textContent);        // will be empty since ngAfterContentInit has not run yet
  }

  // Called an extra time in development module. See in console
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of ContentChild paragraph: ', this.paragraph.nativeElement.textContent);       // will now be populated with a value
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);       // will now be populated with a value
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}