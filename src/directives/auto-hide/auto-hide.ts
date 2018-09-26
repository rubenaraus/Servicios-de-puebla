import { Directive, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[auto-hide]', // Attribute selector
    host: {
        '(ionScroll)': 'onContentScroll($event)'
    }
})
export class AutoHideDirective {

    @Input('auto-hide') elementToHide;

    constructor(private renderer: Renderer) {}

    onContentScroll(event){

        let direction = event.directionY;
        switch (direction) {
            case 'down':
                this.renderer.setElementClass(this.elementToHide, 'animated', true);
                this.renderer.setElementClass(this.elementToHide, 'fast', true);
                this.renderer.setElementClass(this.elementToHide, 'fadeInUp', false);
                this.renderer.setElementClass(this.elementToHide, 'fadeOutDown', true);
                break;
            case 'up':
                this.renderer.setElementClass(this.elementToHide, 'fadeOutDown', false);
                this.renderer.setElementClass(this.elementToHide, 'fadeInUp', true);
                break;
            default:
                break;
        }
    }

}
