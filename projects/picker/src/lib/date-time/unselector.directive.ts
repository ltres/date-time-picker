/**
 * unselector.directive
 */

import { AfterViewInit, Directive, ElementRef } from "@angular/core";
import { UnselectorService } from "./unselector.service";


@Directive({
    selector: '[unselector]',
    exportAs: 'unselector',
})
export class UnselectorDirective implements AfterViewInit{
    constructor( 
        private unselectorService: UnselectorService, 
        private elementRef: ElementRef
     ){
        console.log("unselector created");
    }
    ngAfterViewInit(): void {
        (this.elementRef.nativeElement as HTMLElement).addEventListener('click', () => {
            this.unselectorService.setUnselect$(true);
        })
    }
}
