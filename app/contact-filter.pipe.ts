import {PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'searchContact'
})

export class SearchFilterPipe{

    transform(value, args) {
        let txt = args;
        return txt ? value.filter((item) => item.name.toLocaleLowerCase().indexOf(txt) !== -1) : value;
    }
}
