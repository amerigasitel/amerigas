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
function openNav() {
  document.getElementById("leftside").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("leftside").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
var aGas = [];
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
    }
}
$('.btn-back').on("click", function(){
	var cfno = $('.cfno').val();
	var cf = (parseInt(cfno)-1);
	if(cf > 0){
		$('.cfno').val(cf);
		$(".cf-"+cfno).hide();
		$(".cf-"+cf).show();
	}
});
$('.btn-next').on("click", function(){
	var cfCnt = document.querySelectorAll('.call-flow').length;
	var cfno = $('.cfno').val();
	var cf = (parseInt(cfno)+1);
	if(cf <= cfCnt){
		$('.cfno').val(cf);
		$(".cf-"+cfno).hide();
		$(".cf-"+cf).show();
	}
});


$('.btnLoadText').on("click", function(){
	var mCDid=''; var mTxt=''; var mTxtCnt = 0; var mTxtLink = '';
	var iText = $('.data-txt').val().split('\n')
	for(var i = 0;i < iText.length;i++){
		if(iText[i].trim() == '*Start:'){
			if(i > 0){
				$('#caseList').append('<li><a href="#" title="'+mCDid+'" onclick="kbShow(this)">'+ mTxtLink +'</a></li>');
				//$('.kb-desc').append('<div id="'+mCDid+'" class="'+mCDid+'">'+mTxt+'</div>');
				$('.kb-desc').append('<textarea id="'+mCDid+'" class="kb-item '+mCDid+'">'+mTxt+'</textarea>');
				mTxt = ''; mCDid = ''; mTxtLink = '';
				//alert(i +' | '+ iText[i]);
			}
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
});

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
function kbShow(el){
	//el.preventDefault();
	//alert(el.getAttribute('id') +' | '+ el.innerHTML);
	var id = el.getAttribute('title');
	//$('#kbCase').val(el.value);
	$('.kb-info').val($('.' + id).val());
	$('.kb-info').show();
	//$('.data-kb').val($('.' + id).html());
	//alert(id + '\n' + $('.cf-kb').html());
}
$('.tab-btns').each(function(e){
	$(e).on("click", function(){
		alert(this.nodeName + " | " + this.innerHTML);
	});
});
$('.btnJapi').on("click", function(){
	var el=''; var iCnt = 0;
	for(let i of jap){
		for(var k in i){
			//alert("Key is " + k + ", value is " + i[k]);
			var ks = k.trim();
			switch(k) {
			  case 'html':
			  case 'recno':
			  case 'appenTo':
			  case 'elem':
				break;			
			  default:
				el += k + '="' + i[k] + '" ';
				break;
			} 
		}
		iCnt++;
		if(typeof(i.html) != 'undefined'){
			var html = '<'+ i.elem +' '+ el +' >'+i.html+'</'+i.elem +'>';
			$(i.appenTo).append(html);
		} else {
			var html = '<'+i.elem+' '+ el +' />';
			$(i.appenTo).append(html);
		}
		//alert(html + ' \n' + el);
		el = '';
		
		//alert(i.recno + " - " + i.html + " - " + jap.length);
	}
});

function fxnTab(e){
	var tab = e.getAttribute('id');
	$('.tabs div').each(function(e){
		$(e).hide();
	})
	$('.'+tab).show();
}
function datas(e){
	var thisId = e.getAttribute('id');
	var dds = JSON.parse($(thisId).val());
	for(let i of dds){
		
	}
}

