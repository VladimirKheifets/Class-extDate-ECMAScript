import {extDate} from './classExtDate.js';

function demo2(){
	const resultCont = document.getElementById("result");

	const beginDate = "2025-02-05T00:30:00";
	const dt = new extDate(beginDate);
	dt.setLocale("ru-Ru");

	let result = `locale = ${dt.locale}\n\n`;
  	result += `dateTime = ${dt.dateTime}\n\n`;
  	result += `dateLocale = ${dt.dateLocale}\n\n`;
  	result += `monthName = ${dt.monthName}\n\n`;
  	result += `weekDayName = ${dt.weekDayName}\n\n`;
  	result += dt.outProp();

	//-----------------------------

	dt.setLocale(); // default locale

	const formatOption = {
		"year": "numeric",
		"day": "2-digit",
		"weekday": "long",
		"month": "long"
	};
	dt.parse(formatOption);
	result += dt.outProp();

  	resultCont.innerHTML = result;
};

export{demo2}