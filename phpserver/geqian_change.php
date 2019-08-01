<?php
	$openid=$_POST['openid'];
	$geqian=$_POST['geqian'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$num=1;
	//$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sql2="update wxlogin set geqian='".$geqian."' where openid='".$openid."'";
	$sqll=mysqli_query($conn,$sql2);
	if($sqll){
		echo "success";
	}else{
		echo "没有这个数据";
	}
	mysqli_close($conn);
?>