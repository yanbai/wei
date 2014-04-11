(function(w){
	var calculateNum = function(textArea,numDom,totalNum){
		var num = textArea.textContent.length;
		var totalNum = totalNum || 140;
		numCalc = totalNum - num;
		numDom.innerHTML = numCalc;
		textArea.value = textArea.textContent.slice(0, 139)
		if(numCalc<0)return false;
		return numCalc;
	}
	var autoCalc = function(textArea,numDom,totalNum){
		calculateNum(textArea,numDom);
		textArea.oninput = function(){calculateNum(textArea,numDom)};
		textArea.onpropertychange = function(){calculateNum(textArea,numDom)};
	}
	w.autoCalc = autoCalc;
})(window)
var a = document.getElementById('reply_content_1').getElementsByTagName('em');

autoCalc(document.getElementById('cont_1'),a[0]);