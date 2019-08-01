<?php
	//$openid=$_POST['openid'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	
	//$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sql2="select backimage from wxlogin where openid='oNQQR5fktCLfEJImoqFSqs0j6FC8'";
	$sqll=mysqli_query($conn,$sql2);
	$row = mysql_fetch_array($sqll);
	//header("Content-type: " . $row["imgtype"]);  
	if($row){
		echo "success";
	}
	header("content-type: image/jpeg");
	echo $row['backimage'];
	mysqli_close($conn);
?>