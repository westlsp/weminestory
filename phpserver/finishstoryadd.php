<?php
	$openid=$_POST["openid"];
	$name=$_POST['name'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info){
		//$jsonstory= json_encode($info, true);
		echo json_encode($info);
	}else{
		echo "fail";
	}
?>