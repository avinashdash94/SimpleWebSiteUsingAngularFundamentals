import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQ_TOKEN } from ".";


@Directive({
    selector: '[modal-trigger]'  //[] indecated it is an attribute not an element
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string // to get dynamic Id of the modal @Input('modal-trigger') is like this because Input does not understand - in variable name

    constructor(ref:ElementRef ,@Inject(JQ_TOKEN) private $: any){
        this.el = ref.nativeElement;
    }
    ngOnInit(): void {
        this.el.addEventListener('click', e=>{
            console.log('log');
            this.$(`#${this.modalId}`).modal('toggle');
        })        
    }
}
