<?php
	
 	date_default_timezone_set("Asia/Shanghai");
	$time=date("Y-m-d H:i:s",strtotime("+2 day"));
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="update story set toupiao_time='".$time."' where numstory='21312'";
	$sqll=mysqli_query($conn,$sql2);
	if($sqll){
		$sql2="select * from story where numstory='21312'";
		$sqll=mysqli_query($conn,$sql2);
		$info=mysqli_fetch_array($sqll);
		if($info)
		{
			echo json_encode($info);
		}
		
	}else{
		echo "fail";
	}
	mysqli_close($conn);
?>