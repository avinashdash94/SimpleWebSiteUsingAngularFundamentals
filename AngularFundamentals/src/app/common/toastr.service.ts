import { Injectable, InjectionToken } from "@angular/core";

//declare let toastr:any;

//**Following is the new way to create Injectable without create */
export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

//** Defining Toastr type */

export interface Toastr{
    success(msg:string, title?:string): void;
    info(msg:string, title?:string): void;
    warning(msg:string, title?:string): void;
    error(msg:string, title?:string): void;
}

//********below is injectable way to get add ToasterService class to use toastr which is a global object can be used any where for sussess popup type
// @Injectable()
// export class ToastrService{
//     success(message:string, title?:string){
//         toastr.success(message, title)
//     }
    
//     info(message:string, title?:string){
//         toastr.info(message, title)
//     }
//     warning(message:string, title?:string){
//         toastr.warning(message, title)
//     }
//     error(message:string, title?:string){
//         toastr.success(message, title)
//     }
   

// }