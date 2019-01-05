import { ElementRef, OnInit } from '@angular/core';
export declare class AlertComponent implements OnInit {
    private elementRef;
    ariaLabelledby: string;
    hostClass: string;
    role: string;
    tabindex: string;
    class: string;
    message: ElementRef;
    close: boolean;
    id: string;
    private classList;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    closeAlert(): void;
    trap(): void;
}
