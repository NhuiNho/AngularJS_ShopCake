// custom-currency.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
     transform(value: number | undefined): string {
          // Tùy chỉnh logic của bạn để hiển thị định dạng mong muốn
          var formattedValue = "undefined";
          if (value !== undefined) {
               formattedValue = `${Math.floor(value).toString().replace(/\d(?=(\d{3})+$)/g, '$&,')} đ`;
          }
          return formattedValue;
     }
}
