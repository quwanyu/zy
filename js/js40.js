var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleHeight=50;
var contentHeight=500;
var n=0;
for(var i=0; i<title.length; i++) {
	title[i].idx=i;
	title[i].onclick=function () {
		n=this.idx;
		for(var i=0;i<ctbox.length; i++) {
			if(i<=n){
				ctbox[i].style.top=i*titleHeight+'px';
			}else {
				ctbox[i].style.top=i*titleHeight+contentHeight+'px';
			}
		}
	}
}
