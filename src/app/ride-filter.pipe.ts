import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  transform(value: any[], args?: string): any[] {
    if (args === 'toOffice') {
      return value.filter(x => x.destination === "Office");
    }
    else if (args === 'fromOffice') {
      return value.filter(x => x.pickUp === "Office");
    }
    return value;
  }

}
