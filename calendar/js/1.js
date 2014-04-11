// JavaScript Document

/*
example
MCalendar(2013,'March')
*/
var MCalendar = function(year,month){
	this.year = year;
	this.month = month;
	this.mm = 0;
	this.today = new Date();
	this.str='';
	this.m = {'January':1,'February':2,'March':3,'April':4,'May':5,'June':6,'July':7,'August':8,'September':9,'October':10,'November':11,'December':12};
	this.isLeapYear = this.year%4==0 && this.year%100!=0 || this.year%4==0 && this.year%400==0;
	this.init();
	
};

MCalendar.prototype = {
	days : function(){return this.isLeapYear ? {January:31,February:29,March:31,April:30,May:31,June:30,July:31,August:30,September:31,October:30,November:31,December:30} : {January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:30,September:31,October:30,November:31,December:30}},
	init:function(){
		this.mm = this.m[this.month];
		var firstDay = new Date(this.month +'1,'+this.year);
		var b = {0:6,1:0,2:1,3:2,4:3,5:4,6:5}
		var b = b[firstDay.getDay()];
		var s = '';
		for(var i = 0,l=b;i<l;i++){
			s+='<b></b>';
		};
		//var a = document.createElement('a');
		for(var i = 1,l=this.days()[this.month];i<=l;i++){ //not efficient
			this.str += '<a class="' + (this.today.getFullYear() === this.year &&  this.today.getMonth() === new Date(this.month+" "+i+","+this.year).getMonth() && this.today.getDate() === i ? 'cur today' : '')  +'" data-date_text="'+this.year+','+this.month+','+i+'" href="javascript:;">'+i+'</a>'
		};
		this.str = '<div class="date_select_dd fn-clear">\
			<span>\
				一\
				<i></i>\
			</span>\
			<span>\
				二\
				<i></i>\
			</span>\
			<span>\
				三\
				<i></i>\
			</span>\
			<span>\
				四\
				<i></i>\
			</span>\
			<span>\
				五\
				<i></i>\
			</span>\
			<span>\
				六\
				<i></i>\
			</span>\
			<span>\
				日\
				<i></i>\
			</span>'+s+this.str+
		'</div>';
	}
}


var Calendar = {
	today : new Date(),
	year : new Date().getFullYear(),
	month : new Date().getMonth()+1,
	m : {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'},
	
	
	init:function(){
		var thisMonth = new MCalendar(this.year,this.m[this.month]);
		var str = '<div id="date_select_30" class="date_select">\
					<div class="date_select_yymm">\
						<i class="prev" onclick="Calendar.change(\'back\')"></i>\
						<i class="next" onclick="Calendar.change(\'foward\')"></i>\
						<span>'+this.year+'年 '+this.month+'月</span>\
					</div><a class="date_select_back_today" href="javascript:;">回到今天</a>'
		str += thisMonth.str + '</div>';
		$('body').append(str);
	},
	
	change : function(direction){
		var year = this.year,month=this.month;
		var m = {'January':1,'February':2,'March':3,'April':4,'May':5,'June':6,'July':7,'August':8,'September':9,'October':10,'November':11,'December':12};
		var n = {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};
		if(direction == 'foward'){
			year = month == 12 ? year+1 : year
			month = month == 12 ? 1 : month+1
		}else if(direction == 'back'){
			year = month == 1 ? year-1 : year
			month = month == 1 ? 1 : month-1
		}
		alert(year+','+month)
		var newMonth = new MCalendar(year,month);
		$('#date_select_30').html('\
			<div class="date_select_yymm">\
				<i class="prev" onclick="Calendar.change('+year+',\''+n[m[month]-1]+'\')"></i>\
				<i class="next" onclick="Calendar.change('+year+',\''+n[m[month]+1]+'\')"></i>\
				<span>'+year+'年 '+m[month]+'月</span>\
			</div><a class="date_select_back_today" href="javascript:;">回到今天</a>'+newMonth.str)
		this.month ++;
	},
	changeYM:function(){
		var year = this.year,month=this.month;
		var m = {'January':1,'February':2,'March':3,'April':4,'May':5,'June':6,'July':7,'August':8,'September':9,'October':10,'November':11,'December':12};
		var n = {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};
		if(direction == 'foward'){
			year = month == 12 ? year+1 : year
			month = month == 12 ? 1 : month+1
		}else if(direction == 'back'){
			year = month == 1 ? year-1 : year
			month = month == 1 ? 1 : month-1
		}
		
		var newMonth = new MCalendar(year,month);
		$('#date_select_30').html('\
			<div class="date_select_yymm">\
				<i class="prev" onclick="Calendar.change('+year+',\''+n[m[month]-1]+'\')"></i>\
				<i class="next" onclick="Calendar.change('+year+',\''+n[m[month]+1]+'\')"></i>\
				<span>'+year+'年 '+m[month]+'月</span>\
			</div><a class="date_select_back_today" href="javascript:;">回到今天</a>'+newMonth.str)
		this.month ++;
	}
}
/*
var Calendar = function(){
	this.today = new Date();
	this.year = this.today.getFullYear();
	this.month = this.today.getMonth()+1;
	this.m={1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};
	this.init();
}

*/
/*
example
Calendar.change(2013,'March')
*/

Calendar.init()