<?php
	$numstory=$_POST['storynum'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$num=1;
	//$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sql2="update story set xushiing=".$num." where numstory='".$numstory."'";
	$sqll=mysqli_query($conn,$sql2);
	if($sqll){
		echo "success";
	}else{
		echo "没有这个数据";
	}
	mysqli_close($conn);
?>