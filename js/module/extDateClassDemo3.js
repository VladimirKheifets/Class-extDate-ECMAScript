import {extDate} from './classExtDate.js';

function demo3(){

	const resultCont = document.getElementById("result");

	const date = "2025-03-05 00:30:00";

	const formatOption = {
		"year": "numeric",
		"day": "numeric",
		"weekday": "long",
		"month": "long"
	};

	const locales = [

	"ru-Ru",
	"en-US",
	"fr-Fr",
	 null, // - default locale
	"he-IL",
	"zh-CN"

	];

	const dt = new extDate(date, formatOption );

	let result = `date = ${date}\n\n`;
	result += `defaultLocale = ${dt.defaultLocale}\n\n`;
	result += `-----------------------------------------\n\n`;

	let dateLocale;

	for(let locale of locales)
	{
		dt.setLocale(locale);
		dateLocale = dt.format();
		result += `locale = ${locale}\n\n`;
		result += `dateLocale = ${dateLocale}\n\n`;
		result += `-------------------------------------\n\n`;
	}
  	resultCont.innerHTML = result;
};

export{demo3}