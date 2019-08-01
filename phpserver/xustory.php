<?php
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	//$sql1="INSERT INTO wxlogin (openid,name) VALUES ('".$openid."','".$name."')";
	//$sql2="select * from story where numstory='".$numstory."'";
	$sql2="select * from story";
	$sqll=mysqli_query($conn,$sql2);
	//$info=mysqli_fetch_array($sqll);
	$array=array();
	$x=0;
	if(mysqli_num_rows($sqll)>0){
			$result=mysqli_num_rows($sqll);
			//echo $result;
			$randnum=mt_rand(0,$result-20);
			$sql2="select * from story where id>".$randnum." limit 20";
			$sqll=mysqli_query($conn,$sql2);
			if(mysqli_num_rows($sqll)>0){
				$result=mysqli_num_rows($sqll);
				
				while($row=mysqli_fetch_assoc($sqll)){
				//echo json_encode($row, true);
				//$array[$x]=json_encode($row);//J内嵌SON转字符串了
				$array[$x]=$row;
				$x++;
				}
				//echo json_encode($array);
				echo json_encode($array);
			}else{
				echo "fail";
			}
			/*while($row=mysqli_fetch_assoc($sqll)){
			//echo json_encode($row, true);
				//$array[$x]=json_encode($row);//JSON转字符串了
				$array[$x]=$row;
				$x++;
			}
			//echo json_encode($array);
			echo json_encode($array);*/
	}else{
		echo "fail";
	}
	mysqli_close($conn);
?>