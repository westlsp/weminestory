<?php
	$numstory=trim($_POST['content']);
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql1="INSERT INTO wxlogin (openid,name) VALUES ('".$openid."','".$name."')";
	$sql2="select * from story where numstory='".$numstory."'";
	$sqll=mysqli_query($conn,$sql2);
	//$info=mysqli_fetch_array($sqll);
	$array=array();
	$x=0;
	if(mysqli_num_rows($sqll)>0){
			$result=mysqli_num_rows($sqll);
			
			while($row=mysqli_fetch_assoc($sqll)){
			//echo json_encode($row, true);
				//$array[$x]=json_encode($row);//JSON转字符串了,无论键名还是键值整数型也是变成字符串
				$array[$x]=$row;
				$x++;
			}
			//echo json_encode($array);
			echo json_encode($array);
	}else{
		$sql2="select * from story where storyname='".$numstory."'";
		$sqll=mysqli_query($conn,$sql2);
		if(mysqli_num_rows($sqll)>0){
			$result=mysqli_num_rows($sqll);
			
			while($row=mysqli_fetch_assoc($sqll)){
			//echo json_encode($row, true);
				//$array[$x]=json_encode($row);//JSON转字符串了,无论键名还是键值整数型也是变成字符串
				$array[$x]=$row;
				$x++;
			}
			//echo json_encode($array);
			echo json_encode($array);
		}else{
			$sql2="select * from story where storytype='".$numstory."'";
			$sqll=mysqli_query($conn,$sql2);
			if(mysqli_num_rows($sqll)>0){
			$result=mysqli_num_rows($sqll);
			
			while($row=mysqli_fetch_assoc($sqll)){
			//echo json_encode($row, true);
				//$array[$x]=json_encode($row);//JSON转字符串了,无论键名还是键值整数型也是变成字符串
				$array[$x]=$row;
				$x++;
			}
				echo json_encode($array);
			}else{
				echo "fail";
			}
		}
	}
	mysqli_close($conn);
?>