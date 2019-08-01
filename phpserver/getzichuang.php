<?php
	//$zuopinnum=array();
	//$arr = array();
	
	//$str='{"sites":["Google", "Runoob", "Taobao"],"num":["12123","21312","12312"]}';
	//$str='{"sites": "Taobao","num":"12312"}';
	
	//$arr=json_decode($zuopinnum);
	//echo var_dump($zuopinnum);
	//echo count($arr);


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


	//$arr = explode(',',$str);
	//echo $arr[0];
	//echo gettype($zuopinnum).$zuopinnum;
	
	/*$jsonstory;
	$updatefstory;
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info){
		$jsonstory= json_encode($info, true);
		echo $jsonstory;
		
		
	}else{
		echo "没有这个数据";
	}*/
?>