<?php
	$openid=$_POST["openid"];
	$name=$_POST['name'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql1="INSERT INTO wxlogin (openid,name) VALUES ('".$openid."','".$name."')";
	$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info){
		echo "已经有此信息";
	}else{
		$sqll=mysqli_query($conn,$sql1);
		if($sqll){
			echo "添加成功";
		}else{
			echo "添加失败";
		}
	}
	mysqli_close($conn);
?>