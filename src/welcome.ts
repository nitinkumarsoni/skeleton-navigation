//import {computedFrom} from 'aurelia-framework';

export class Welcome {
    heading: string = 'Welcome to the Weather Demo App';
    cities = [
        {woeid: 2344116},
        {woeid: 638242},
        {woeid: 565346},
        {woeid: 9807},
        {woeid: 560743},
        {woeid: 44418},
    ];
}

export class UpperValueConverter {
    toView(value: string): string {
        return value && value.toUpperCase();
    }
}
