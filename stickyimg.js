var imgmovementl=document.getElementsByClassName("stickyimageleft");
var imgmovementr=document.getElementsByClassName("stickyimageright");
document.onmousemove=function()
{
	var x = event.clientX*10/window.innerWidth + "vw";
	var y = event.clientY*10/window.innerHeight + "vh";

	for( var i = 0, l = imgmovementl.length; i < l; i++ )
	{
		imgmovementl[i].style.transform="translate("+x+","+y+")";
	}
	for( var i = 0, l = imgmovementr.length; i < l; i++ )
	{
		imgmovementr[i].style.transform="translate("+x+","+y+")";
	}
}
