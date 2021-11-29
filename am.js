function $(selector){
	var el;
	if (typeof selector === "string" || selector instanceof String) {
		el = document.querySelector(selector);
	} else {
		el = selector;
	}
	const self = {
		//element: document.querySelector(el),
		element: el,
		
		attr:(name, value) => {
			if(value == null){
				self.element.getAttribute(name);
			} else{
				self.element.setAttribute(name, value);
			}
		},
		
		hide:()=>{
			self.element.style.display = "none";
		},
		show:()=>{
			self.element.style.display = "block";
		},
		toggle:()=>{
			if(self.element.style.display == "none"){
				self.element.style.display = "block";
			} else {
				self.element.style.display = "none";
			}
		},
		val:(value)=> {
			if(value == null){
				return self.element.value;
			} else {
				self.element.value = value;
			}
		},
		html:(value) => {
			if(value == null){
				return self.element.innerHTML;
			} else {
				self.element.innerHTML = value;
			}
		},
		append:(value)=> {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML += value;
			}
		},
		remove:(value)=> {
			self.element.remove();
		},
		
		each:(fn) => {
			elements = document.querySelectorAll(selector);
			for (var i = 0; i < elements.length; i++){
				fn(elements[i]);
			}
		},
		
		on:(event, callback) => {
			self.element.addEventListener(event, callback);
		}
	}
	return self;
}
var imgVisible = 0;
const fileUrl = 'am-datab.txt' // provide file location
fetch(fileUrl)
   .then( r => r.text() )
   .then( t => $('.kb-data').html(t) )

$('.btns').each(function(e){
	//alert(e.getAttribute('class'));
	$(e).on('click', function(){
		if(isClass(e, 'load-data')){
			loadKb();
			$(".kb-data-div").toggle();
		} else if(isClass(e, 'kb-data-hide')){
			$(".kb-data-div").hide();
		} else if(isClass(e, 'btn-load-data')){
			loadKb();
		} else if(isClass(e, 'btn-next')){
			var cfCnt = document.querySelectorAll('.call-flow').length;
			var cfno = $('.cfno').val();
			var cf = (parseInt(cfno)+1);
			if(cf <= cfCnt){
				$('.cfno').val(cf);
				$(".cf-"+cfno).hide();
				$(".cf-"+cf).show();
			}
		} else if(isClass(e, 'btn-back')){
			var cfno = $('.cfno').val();
			var cf = (parseInt(cfno)-1);
			if(cf > 0){
				$('.cfno').val(cf);
				$(".cf-"+cfno).hide();
				$(".cf-"+cf).show();
			}
		} else if(isClass(e, 'bi-next')){
			var cfCnt = imgCount;
			var cfno = $('.cfno-img').val();
			var cf = (parseInt(cfno)+1);
			if(cf <= cfCnt){
				$('.cfno-img').val(cf);
				$("#img-"+cfno).hide();
				$("#img-"+cf).show();
			}
		} else if(isClass(e, 'bi-back')){
			var cfno = $('.cfno-img').val();
			var cf = (parseInt(cfno)-1);
			if(cf > 0){
				$('.cfno-img').val(cf);
				$("#img-"+cfno).hide();
				$("#img-"+cf).show();
			}
		} else if(isClass(e, 'btn-wrap')){
			var mCDid = spaceToDash('Wrap Up Call');
			$('.awrap').toggle();
			$('.awrap').val($('#' + mCDid).val().replace('*Issue: Wrap Up Call',''));
		} else if(isClass(e, 'btn-aht')){
				var ahtAll = $('.case-notes').val();
				var iText = $('.case-notes').val().split(' ');
				var ahtm = 0; var ahts = 0; var ahtInSec=''; 
				var acalls = 0; var ahtAlls = '';
				for(var i = 0;i < iText.length;i++){
					var aht = iText[i].split('.');
					ahtm += parseInt(aht[0]) * 60;
					ahts += parseInt(aht[1]);
					var ahtMin = parseInt(aht[0]) * 60;
					ahtInSec += (ahtMin + parseInt(aht[1])) + " ";
					ahtAlls += iText[i].replace('.', ':') + ' ';
				}
				var secs = ahtm + ahts;
				var mins = (ahtm + ahts) / 60;
				acalls = secs / iText.length;
				var xht = 'AHT = ' + acalls + ' | Total Calls: ' + iText.length + ' | Totals in Seconds: ' + secs;
				$('.aht-alls').html('Calls: ' + ahtAll);
				$('.aht-sec').html('Call/Seconds: ' + ahtInSec);
				$('.aht-all').html('Call/Minute: ' + ahtAlls);
				$('.aht').html(xht);
				alert(xht);
		} else {
			alert(e.getAttribute('class'));
		}
	})
});

function caseSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("kbCase");
    filter = input.value.toUpperCase();
    ul = document.getElementById("caseList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
		$('#caseList').show();
    }
}

function loadKb(){
	//$('#caseList').html('');
	var mCDid=''; var mTxt=''; var mTxtCnt = 0; var mTxtLink = '';
	var iText = $('.kb-data').val().split('\n');
	for(var i = 0;i < iText.length;i++){
		if(iText[i].trim() == '*Start:'){
			if(i > 0){
				$('#caseList').append('<li><a href="#" title="'+mCDid+'" onclick="kbShow(this)">'+ mTxtLink +'</a></li>');
				$('.cf-images').append('<div id="img-'+mCDid+'"></div>');
				$('.kb-desc').append('<textarea id="'+mCDid+'" class="kb-item '+mCDid+'">'+mTxt+'</textarea>');
				mTxt = ''; mCDid = ''; mTxtLink = '';
			}
		}else if(iText[i].trim().toLowerCase() == '**am-data'){
			$('#caseList').html('');
		} else {
			var ix = iText[i].split(':'); //alert(iText[i]);
			var ixa = ix[0].trim();
			if(ix.length > 1){
				var ixb = ix[1].trim();
			}
			
			switch(ixa) {
				case '*Issue':
					mTxtLink += ix[1].trim();
					mCDid = spaceToDash(ix[1].trim());
					break;
				case '*Case':
					mTxtLink += ' - ' + ix[1].trim();
					break;
			} 
			mTxt += iText[i] + '\n';
			
		}
	}
	$('.kb-data-div').hide();
	//$('.data-txt').val('');
}
function spaceToDash(str){
	if(typeof(str) != null || typeof(str) != 'undefined'){
		var iB = str.split(' ');
		var std = str;
		for(var a = 0; a < iB.length; a++){
			std = std.replace(' ', '_');
		}
		return std;
	}
}
function isClass(e, c){
	if (typeof e === "string" || e instanceof String) {
		return false;
	} else {
		var str = e.getAttribute('class').indexOf(c);
		if(str > 0){
			return true;
		} else {
			return false;
		}
		
	}
}
function kbShow(el){
	var id = el.getAttribute('title');
	kbId = id;
	$('.kb-info').val($('.' + id).val());
	$('.kb-info').show();
	loadImages(id);	
	$('#caseList').hide();
}
function loadImages(id){
	imgVisible = 0;
	var kbd = '';
	$('.kb-tab').html('');
	$('.kb-images').html('');
	$('.cfno-img').val(1);
	var iText = $('.kb-info').val().split('\n');
	for(var i = 0;i < iText.length;i++){
		var ix = iText[i].replace('http://','').split(':'); //alert(iText[i]);
		var ixa = ix[0].trim();
		if(ix.length > 1){
			var ixb = ix[1].trim();
		}
		
		switch(ixa) {
			case '*Img-dir':
				imgDir = ix[1].trim();
				break;
			case '*Img-file':
				var imgs = ix[1].trim().split(',');
				$('.kb-images').html('');
				for(var x = 0; x < imgs.length; x++){
					$('.kb-images').append('<img src="'+ imgDir + '/' + imgs[x] +'" alt="img-'+x+'" class="kbimges" id="img-'+(x+1)+'" />');
					//alert('/' + imgDir + '/' + imgs[x]);
				}
				imgCount = imgs.length;
				$('#img-1').show();
				//alert(imgDir + "\n\n" + imgs);
				break;
			case '*Tabs':
				//alert(ix[1]);
				var tabs = '';
				var ixb = ix[1].split('|');
				for(var a = 0; a < ixb.length; a++){
					tabs += ixb[a].replace('=',':') + "<br />";
				}
				var tabsi = "<div id='tabs'>" + tabs + "</div>";
				tabs = '';
				$('.kb-tab').append(tabsi);
				break;
			case '*Tab':
				$('.kb-docs').append("<span>"+ ix[1].trim().replace('=',':') + "</span><br />");
				break;
			case '*iframes':
			case '*iframe':
				var kblink = "<a href='http://"+ix[1].trim()+"' target='_blank'>KB Link</a>";
				$('.kb-tab').append("<div id='tabs'>" + kblink  + "</div>");
				//$('.kb-tmp').html('<iframe src="http://'+ix[1].trim()+'" class="resizeme" id="iframy"></iframe>');
				break;
			default:
				kbd += iText[i] + '\n';
				break;
		}
	}
	$('.kb-info').val(kbd);
	//alert($('#tabs').length);
}

