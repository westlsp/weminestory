<?php
	$numstory=$_POST['storynum'];
	$openid=$_POST['openid'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$num=1;
	//$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sql2="select * from wxlogin where openid='".$openid."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_assoc($sqll);
	if($info){
		if($info['jubaojizhi']!=1)
		{
			$sql2="update story set bool_jubao=".$num." where numstory='".$numstory."'";
			$sqll=mysqli_query($conn,$sql2);
			if($sqll){
				echo "success";
			}else{
				echo "没有这个数据";
			}
		}
		else{
			echo "您暂时没有举报权限";
		}
	}else
	{
		echo "fail";
	}
	
	mysqli_close($conn);
?>