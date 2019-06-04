import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "call"
})
export class CallPipe implements PipeTransform {
    transform(
        value: any,
        handler: (value: any) => any,
        context?: any,
        ...args: Array<any>
    ): any {
        if (context) {
            return handler.call(context, value, ...args);
        }

        return handler(value);
    }
}
