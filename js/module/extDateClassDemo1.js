import {extDate} from './classExtDate.js';

function demo1(){
  const resultCont = document.getElementById("result");

  const begin = "00:30:00"; //current date 00:30:00
  const dt = new extDate(begin);

  // begin +1 day
  dt.setIntervals({days:1});

  let beginDateTime = dt.dateTime;

  // beginDateTime + 6 hours
  dt.setIntervals({hours:6});

  let endDateTime = dt.dateTime;

  //Number of the week day (1-Monday,..,7-Sunday)
  let weekDay = dt.weekDay;


  let result = `beginDateTime = ${beginDateTime}\n\n`;
  result += `endDateTime = ${endDateTime}\n\n`;
  result += `weekDay = ${weekDay}\n\n`;
  result += dt.outProp();
  resultCont.innerHTML = result;
};

export {demo1}