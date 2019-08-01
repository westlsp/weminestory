<?php
	$numstory=$_POST['storynum'];
	$openid=$_POST["openid"];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$num=1;
	date_default_timezone_set("Asia/Shanghai");
	$time=date("Y-m-d H:i:s",strtotime("+2 day"));
	class toupiaoidsum{
		var $toupiaoidsum;
		
		function __construct($id){
			$this->toupiaoidsum=$id;
		}
	}
	$arr=array($openid);
	$obj=new toupiaoidsum($arr);
	$json=json_encode($obj);
	//$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sql2="update story set finishpanding=".$num.",piaosum='".$json."', toupiao_time='".$time."' where numstory='".$numstory."'";
	$sqll=mysqli_query($conn,$sql2);
	if($sqll){
		echo "success";
	}else{
		echo $json;
	}
	mysqli_close($conn);
?>