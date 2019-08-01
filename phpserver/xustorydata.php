<?php
	$storynum=$_POST["storynum"];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from story where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info){
		echo json_encode($info);
	}else{
		echo "没有这个数据";
	}
?>