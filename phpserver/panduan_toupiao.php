<?php
	$storynum=$_POST["storynum"];
	$openid=$_POST['openid'];
	//$num=1;
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from story where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info){
		$json=json_decode($info['piaosum']);
		$arr=$json->{'toupiaoidsum'};
		array_push($arr,$openid);
		$json->{'toupiaoidsum'}=$arr;
		$jsonstr=json_encode($json);
		$sql1="update story set piaosum='".$jsonstr."' where numstory='".$storynum."'";
		$sqll=mysqli_query($conn,$sql1);
		if($sqll)
		{
			$sql2="select * from story where numstory='".$storynum."'";
			$sqll=mysqli_query($conn,$sql2);
			$info=mysqli_fetch_array($sqll);
			if($info)
			{
				echo json_encode($info);
			}
			else{
				echo "fail";
			}
		}
		else{
			echo "fail1";
		}
	}else{
		echo "没有这个数据";
	}
	mysqli_close($conn);
?>