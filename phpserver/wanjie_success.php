<?php
	$storynum=$_POST["storynum"];
	$num=1;
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="update story set boolfinish=".$num." where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	if($sqll){
		echo "success";
	}else{
		echo "没有这个数据";
	}
	mysqli_close($conn);
?>