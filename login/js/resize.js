window.addEventListener('load', function () {
	console.log(window.innerWidth)
	var windth = window.innerWidth;
	function dispalyWidth(){
		//获取box
		if(windth>=750){
        	var box = document.querySelector(".login_interface");
        	// 鼠标按下的时候获取鼠标在盒子里面的定位
        	box.addEventListener("mousedown",function(e){
        		// 盒子外面距离页面的距离
        		var x =e.pageX - box.offsetLeft;
        		var y =e.pageY - box.offsetTop;
        		document.onmousemove=function(e){
        			// 在盒子里面的距离
        			var x1 = e.pageX - x;
        			var y1 = e.pageY -y;
        			box.style.left = x1+'px';
        			box.style.top = y1+'px';
        		}
        	})
        	box.addEventListener("mouseup",function(){
        		document.onmousemove = null;
        	})
       }
	}
	dispalyWidth();
    // 监听一下页面的宽度
    // window.addEventListener('resize', function () {
        if(windth>=750){
        	window.addEventListener('resize', dispalyWidth)
        }
    // })

})