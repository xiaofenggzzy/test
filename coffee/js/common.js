(function (doc_01, win_01) {
var docEl_01 = doc_01.documentElement;
var resizeEvt_01 = 'orientationchange' in window ? 'orientationchange' : 'resize';
var recalc_01 = function () {
var clientWidth_01 = docEl_01.clientWidth;
var clientheight_01 = docEl_01.clientHeight;
if (!clientWidth_01) return;
	docEl_01.style.fontSize = (clientWidth_01 /640*100).toFixed(1)+'px';
/*
	if(parseInt(docEl_01.style.fontSize)<66)
{
	docEl_01.style.fontSize=66+'px';
}
*/
};
recalc_01();
if (!doc_01.addEventListener) return;
win_01.addEventListener(resizeEvt_01, recalc_01, false);
$('#search').on('touchstart',function () {
	if($(this).val()=='请输入搜索内容'){
        $(this).val('');
	}
});
$('#search').on('blur',function () {
	if($(this).val()==''){
        $(this).val('请输入搜索内容');
	}

})
})(document, window);