import {extDate} from './classExtDate.js';

function demo4(){

	const resultCont = document.getElementById("result");

	const beginDate = "2025-02-05 00:30:00";
	const dt = new extDate(beginDate);

	let endDate = "2025-02-07 06:30:00";
	dt.getIntervals(endDate);

	let result = `beginDate = ${beginDate}\n\n`;
	result += `endDate = ${endDate}\n\n`;
	result += `daysBetweenDates = ${dt.daysBetweenDates}\n\n`;
	result += `hoursBetweenDates = ${dt.hoursBetweenDates}\n\n`;
	result += `minutesBetweenDates = ${dt.minutesBetweenDates}`;

  	resultCont.innerHTML = result;
};

export{demo4}