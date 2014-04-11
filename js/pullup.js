var Animate = {
	toggleFilter:function(type){

		var li=G(type+'FilterLi');
		var candidate=G(type+'Candidate');
		if(candidate.style.display == 'none'){
			$(candidate).show();
			li.className='current';
		}else{
			$(candidate).hide();
			li.className='';
		}
		$Evt.push(candidate);
		$$e=false;
	},
	setFilter:function(type,callback){
		var filter=G(type+'Filter');
		var li=G(type+'FilterLi');
		var value=this._target.innerHTML;
		var flag = this._target.getAttribute('flag');
		if(flag!=null){
			G(type+'Hidden').value = flag;
		}else{
			G(type+'Hidden').value = value;
		}
		filter.innerHTML = value;
		li.className='';
		if(type=='pro'){G('cityCandidate').innerHTML = CitySelect.cityInit(value);}
		var callback = eval(callback);
		if(callback){if(arguments[2]){callback.call(this,arguments[2]);}else{callback();}}
	},
	setFilter:function(type,callback){
		var filter=G(type+'Filter');
		var li=G(type+'FilterLi');
		var value=this._target.innerHTML;
		var flag = this._target.getAttribute('flag');
		if(flag!=null){
			G(type+'Hidden').value = flag;
		}else{
			G(type+'Hidden').value = value;
		}
		filter.innerHTML = value;
		li.className='';
		if(type=='pro'){G('cityCandidate').innerHTML = CitySelect.cityInit(value);}
		var callback = eval(callback);
		if(callback){if(arguments[2]){callback.call(this,arguments[2]);}else{callback();}}
	}
}