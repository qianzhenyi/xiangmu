



	function getD(data){
			 console.log(data)
		 var d=data.results[0];
		 var str1="";
		  var str2="";
		   var str3="";
		   var bb="";
		 var w=d.weather_data;
		  var  n=w[0].date.substring(0,3)
//		 
//		  str1=data.date+" "+n+b+":"+c+":"+d;
		  setInterval(function(){

	  	 var a=new Date;

		  var b=a.getHours();
		  var c=a.getMinutes();
		  var d=a.getSeconds();
		  if(d<10){
		  	d="0"+d;
		  }
		  if(c<10){
		  	c="0"+c;
		  }
		  
	   str1=data.date+" "+b+":"+c+":"+d+" "+n;
	    $('.span1').html(str1);
	   	str2="温度："+w[0].temperature;
		 	str3="天气："+w[0].weather;
            $('.span2').html(str2);
            $('.span3').html(str3);
            
            
	   
	   //获取询盘邮件即时信息时间
        var t=a.getTime()-24*60*60*1000;
	  	var aa=new Date(t);
	  	
	  	 var y=aa.getFullYear();
	  	 var m=aa.getMonth()+1;
	  	 var tian=aa.getDate();
		
		 
          bb=y+"年"+m+"月"+tian+"日";
		   $('.riqi').html(bb);
		  		
		  },1000)

	}



