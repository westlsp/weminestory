<?php
	$openid=$_POST["openid"];
	$name=$_POST['name'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_assoc($sqll);
	if($info){
		echo json_encode($info);
	}else{
		echo "fail";
	}
?>