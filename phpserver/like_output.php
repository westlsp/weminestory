<?php
	$zuopinnum=$_POST['zuopinnum'];
	$json=json_decode($zuopinnum);
	
	$arr=$json->{'num'};
	//echo $arr;
	$data=array();
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	for($x=0;$x<count($arr);$x++)
	{
		$sql2="select * from story where numstory='".$arr[$x]."'";
		$sqll=mysqli_query($conn,$sql2);
		$info=mysqli_fetch_assoc($sqll);
		if($info){
			$data[$x]=$info;
		}
	}
	echo json_encode($data);
	mysqli_close($conn);

?>