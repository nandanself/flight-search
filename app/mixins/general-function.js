import Ember from 'ember';

export default Ember.Mixin.create({

	convertingDateToSearchFormat(date){
		let month = this._calculatingMonth(date);
		let day = date.toString().split(' ')[2];
		let year = date.toString().split(' ')[3];
		console.log(`${day}-${month}-${year}`);
		return `${day}-${month}-${year}`;
	},

	_calculatingMonth(date) {
	   var month = date.toString().split(' ')[1];
	   if (month === "Jan" || month === "January") {
	     return "01";
	   } else if (month === "Feb" || month === "Febuary") {
	     return '02';
	   } else if (month === "Mar" || month === "March") {
	     return '03';
	   } else if (month === "Apr" || month === "April") {
	     return '04';
	   } else if (month === "May" || month === "May") {
	     return '05';
	   } else if (month === "Jun" || month === "June") {
	     return '06';
	   } else if (month === "Jul" || month === "July") {
	     return '07';
	   } else if (month === "Aug" || month === "August") {
	     return '08';
	   } else if (month === "Sep" || month === "September") {
	     return '09';
	   } else if (month === "Oct" || month === "October") {
	     return '10';
	   } else if (month === "Nov" || month === "November") {
	     return '11';
	   } else if (month === "Dec" || month === "December") {
	     return '12';
	   }

	},
});
