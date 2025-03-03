#  Class extDate, ECMAScript

[ECMAScript® 2025 Internationalization API](https://tc39.es/ecma402/#datetimeformat-objects)

### Version: 1.0, 2025-03-01

Author: Vladimir Kheifets <vladimir.kheifets@online.de>

Copyright &copy; 2025 Vladimir Kheifets All Rights Reserved

[Demo](https://www.alto-booking.com/developer/extDateClassDemo)


## Description

## 1. Constructor
```js
extDate(inDate, options, locale)
```
## 1.1 Attribute
## 1.1.1 inDate:
- **null** - interpreted as the current date and time\
for examle:  extDate()
- **object** - Date,\
  for examle:  extDate( new Date(attribute*) )
  *[see the attribute of the Date object here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date),\
  for examle: extDate( new Date(2025, 11, 17) )

- **string** - ISO only Time, interpreted as current date and inserted time,\
  for examle: extDate("00:30:00")
- **string** - ISO Date Time,\
  for examle:  extDate("2025-02-05T00:30:00")
  or extDate("2025-02-05 00:30:00")

## 1.1.2 options

**null** - default object = {year: "numeric", month: "2-digit", day: "2-digit"}\
**object**  -
[see Locale options and Date-time component options here]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#narrow), for examle:
```js
    {
        "year": "numeric",
        "day": "2-digit",
        "weekday": "long",
        "month": "long"
    };
```
## 1.1.3 locale

**null** - if the attribute is not defined, the value is determined by the locale from the system.

**string** - [see locales argument here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument),\
for examle: "de-DE"

## 2. Properties

**locale** - string, for example: de-DE\
**defaultLocale** - string, for example:  de-DE\
**date** - string, for example:  2025-03-02\
**dateLocale** - string, for example:  02.03.2025\
**time** - , for example:  06:30:00\
**dateTime** - , for example:  2025-03-02 06:30:00\
**monthName** - string, for example:  März\
**weekDayName** - string, for example:  Sonntag\
**year** - integer, for example:  2025\
**month** - integer, for example:  2\
**day** - integer, for example:  2\
**hours** - integer, for example:  6\
**minutesr** - intege, for example:  30\
**weekDay** - integer, for example:  0

## 3. Methods

## 3.1 Method setLocale(locale)
The method sets the locale.\
**locale:**\
**null** - overrides the previous setting and sets the locale value to match the system locale\
**string** - see above section 1.1.3
for example:
```js
const date = "2025-03-05 00:30:00";
const dt = new extDate(date); //setting default locale
dt.setLocale("en-US"); //setting locale "en-US"
dt.setLocale(); //setting default locale
```
## 3.2 Method format(options)
The **format method** returns a formatted date string.\
**options:** see above section 1.1.2\
Example 1
```js
const date = "2025-03-05 00:30:00";
const formatOption = {
        "year": "numeric",
        "day": "numeric",
        "weekday": "long",
        "month": "long"
    };
const dt = new extDate(date, formatOption); //default locale de-DE
let dateStr = dt.format();
console.log(dateStr); // Mittwoch, 5. März 2025

```
Example 2
```js
const date = "2025-03-05 00:30:00";
const formatOption = {
        "year": "numeric",
        "day": "numeric",
        "weekday": "long",
        "month": "long"
    };
const dt = new extDate(date); //default locale de-DE
let dateStr = dt.format(formatOption);
console.log(dateStr); // Mittwoch, 5. März 2025
```
Example 3
```js
const date = "2025-03-05 00:30:00";
const dt = new extDate(date); //default locale de-DE
// default options object {year: "numeric", month: "2-digit", day: "2-digit"}
let dateStr = dt.format();
console.log(dateStr); // 02.03.2025
```
## 3.3 Method parse(options)
The **parse method** parsed of date and stores properties(see above section 2) of the object.\
The parse method is called from the constructor and other methods.\
It is necessary to call this method only if the options have changed.\
This method calls the format method.

**options:** see above section 1.1.2\
```js
const date = "2025-03-05 00:30:00";
const dt = new extDate(date); //default locale de-DE and options
//The parse method is called from the constructor
console.log(dt.dateLocale); //02.03.2025

const formatOption = {
        "year": "numeric",
        "day": "numeric",
        "weekday": "long",
        "month": "long"
    };
let dateStr = dt.parse(formatOption); // default options

console.log(dt.defaultLocale); //de-DE
console.log(dt.dateLocale); //Mittwoch, 5. März 2025
console.log(dt.monthName); //März
console.log(dt.weekDayName); //Mittwoch
```

## 3.4 Method setIntervals(intervals)
The **setIntervals method** provides date calculations at specified intervals.
```js
intervals
{
    years: +/- integer,
    months: +/- integer,
    days: +/- integer,
    hours: +/- integer,
    minutes: +/- integer
}
```
for example:
```js
const dateTime = "2025-03-03 00:30:00";
  const dt = new extDate(dateTime);

  dt.setIntervals({days:1, hours:8});

  let newDateTime = dt.dateTime;
  console.log(newDateTime); // 2025-03-04 08:30:00

  dt.setIntervals({hours: -2});
  newDateTime = dt.dateTime;
  console.log(newDateTime); // 2025-03-04 06:30:00
```

## 3.5 Method getIntervals(endDate)
The **getIntervals method** provides calculation of intervals between begin and end dates.\
**endDate** - see above section 1.1.1 inDate

Returns Properties:
- **daysBetweenDates** - integer
- **hoursBetweenDates** - integer
- **minutesBetweenDates** - integer

for example:
```js
    const beginDate = "2025-02-05 00:30:00";
    const dt = new extDate(beginDate);

    let endDate = "2025-02-07 06:30:00";
    dt.getIntervals(endDate);

    console.log(dt.daysBetweenDates); // 2
    console.log(dt.hoursBetweenDate); // 54
    console.log(dt.minutesBetweenDates); // 3240
```
## 3.7 Method outProp()
The **outProp method** returns the names and values of all properties as a string for printing.\
This can be useful for debugging.\
for example
```js
    const resultCont = document.getElementById("result");
    const date = "2025-03-03 06:30:00";
    const dt = new extDate(date);
    let result = dt.outProp();
    resultCont.innerHTML = result;
    /*

    Returned properties:

    defaultLocale = de-DE
    locale = de-DE
    date = 2025-03-03
    dateLocale = 03.03.2025
    time = 06:30:00
    dateTime = 2025-03-03 06:30:00
    year = 2025
    month = 2
    monthName = März
    day = 3
    hours = 6
    minutes = 30
    weekDay = 1
    weekDayName = Montag

    */
```


