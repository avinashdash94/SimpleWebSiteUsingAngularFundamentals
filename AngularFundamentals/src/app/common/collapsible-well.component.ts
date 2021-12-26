import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
  template:`
        <div (click)="toggleContent()" class="well pointable">
            <!-- <h4  class="well-title ">{{title}}</h4> -->
            <h4>
            <!--<ng-content select=".title"></ng-content>   ng-content will show the content whatever content inside collapsible-well 
                 tag and select will use to show title class content inside this content -->

                 <!-- OR -->
                 <ng-content select="[well-title]"></ng-content> <!-- For select the own created atribute to be selected ie. well-title for this one-->
            </h4>
            <!-- <ng-content *ngIf="visible" select=".body"></ng-content>This contant tag will show the content inside body class  -->
            <!-- OR -->
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>  <!-- TFor select the own created atribute to be selectedie. well-body for this one  -->
        </div>
  `,
  styles:[`
    .container { padding-left:20px; padding-rght:20px;}
    .event-image { height: 100px; }
    a {cursor:pointer}
  `]
})
export class CollapsibleWellComponent  {
    @Input() title: string;
    visible:boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
    
 
}
