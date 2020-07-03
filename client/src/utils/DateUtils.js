import { format, parse } from "date-fns";

class DateUtils {
  static parseDate(date, formatDate){
    return parse(date, formatDate, new Date());
  };

  static formatDate(date, formatDate){    
    if(date instanceof Date){
      return format(date, formatDate);
    }
    else if(typeof date == "string"){
      return format(parse(date, 'yyyy-MM-dd', new Date()), formatDate);  
    }
    return null;
  };
}

export {DateUtils};