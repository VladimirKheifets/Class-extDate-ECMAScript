/*
  Class extDate
  Version: 1.0, 2025-03-01
  Author: Vladimir Kheifets vladimir.kheifets@online.de
  Copyright © 2025 Vladimir Kheifets All Rights Reserved
*/

class extDate{

  constructor(inDate, options, locale){
    this.creatDateObj(inDate);
    this.defaultLocale = (new Intl.DateTimeFormat()).resolvedOptions().locale;
    this.locale = locale?locale:this.defaultLocale;
    this.defaultOptions = options?options:{year: "numeric", month: "2-digit", day: "2-digit"};
  };

  format(options){
    let locale = this.locale;
    if(!options)
     options = this.defaultOptions;
    return (new Intl.DateTimeFormat(locale, options)).format(this.dateObj);
  };

  setLocale(inLocale){
    this.locale = inLocale?inLocale:this.defaultLocale;
    this.parse();
  };

  creatDateObj(inDate){
    var dateObj;
    if(inDate instanceof Date)
    {
      dateObj = inDate;
      dateObj = this.dateHoursToUTC(dateObj);
    }
    else
    {
      const regDT = /^(\d{4}\-\d{2}\-\d{2}|\d{4}\-\d{2}\-\d{2}(\ |T)\d{2}\:\d{2}\:\d{2})$/;
      const regT = /^\d{2}.\d{2}.\d{2}$/;
      if(regT.test(inDate))
      {
        var dateObj = new Date();
        let reg2 = /\d{1,2}/g
        let hms = inDate.match(reg2);
        dateObj.setUTCHours(...hms);
      }
      else if(regDT.test(inDate))
      {
        dateObj = new Date(inDate);
        dateObj = this.dateHoursToUTC(dateObj);
      }
      else
      {
        dateObj = new Date();
        dateObj = this.dateHoursToUTC(dateObj);
      }
    };

    this.dateObj = dateObj;
  };

  setIntervals(shift){
    const begin = this.dateObj;
    for(let key in shift)
    {
      switch (key)
      {
        case "years":
        begin.setFullYear(begin.getFullYear()+shift.years);
        break;

        case "months":
        begin.setUTCMonth(begin.getUTCMonth()+shift.months);
        break;

        case "days":
        begin.setUTCDate(begin.getDate()+shift.days);
        break;

        case "hours":
        begin.setUTCHours(begin.getUTCHours()+shift.hours);
        break;

        case "minutes":
        begin.setUTCMinutes(begin.getUTCMinutes()+shift.minutes);
        break;
      }
    }
    this.dateObj = begin;
    this.parse();
  };

  getIntervals(inDate){
    const beginTimeMS = this.dateObj.getTime();
    this.creatDateObj(inDate);
    const endDateObj = this.dateObj;
    let endTimeMS = endDateObj.getTime();
    let intervalMs = Math.abs(endTimeMS-beginTimeMS);
    this.daysBetweenDates = Math.floor(intervalMs/86400000);
    this.hoursBetweenDates = Math.floor(intervalMs/3600000);
    this.minutesBetweenDates = Math.floor(intervalMs/60000);
    this.dateObj = endDateObj;
  };

  parse(options)
  {
    const inDateObj = this.dateObj;
    if(!options) options = this.defaultOptions;
    let dateTimeStr = inDateObj.toISOString().slice(0, 19).replace("T"," ");
    let dateTime = dateTimeStr.split(" ");
    this.date = dateTime[0];
    this.dateLocale = this.format(options);
    this.time = dateTime[1];
    this.dateTime= dateTimeStr;
    this.year= inDateObj.getFullYear();
    this.month = inDateObj.getMonth();
    this.monthName = this.format({month: "long"});
    this.day= inDateObj.getDate();
    this.hours= inDateObj.getUTCHours();
    this.minutes= inDateObj.getMinutes();
    this.weekDay = inDateObj.getDay();
    this.weekDayName = this.format({weekday: "long"});
  };

  dateHoursToUTC(dateObj)
  {
    dateObj.setUTCDate(dateObj.getDate());
    dateObj.setUTCHours(dateObj.getHours())
    return dateObj;
  };

  outProp()
  {
    let dt = this;
    let out = "------------------------\n\n"
    out += "<b>Returned properties:\n\n</b>";
    for(var key in dt){
      if(typeof dt[key] !== 'object')
        out +=`\t<b>${key}</b> = ${dt[key]}\n`;
    }
    return out;
  };

};

export {extDate};
