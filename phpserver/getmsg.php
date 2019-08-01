<?php
	$openid=$_POST['openid'];
	$xuzuopinnum=$_POST['xuzuopinnum'];
	$chuangzuopinnum=$_POST['chuangzuopinnum'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from wxlogin where openid='".$openid."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_assoc($sqll);
	$sum=array();
	if($info){
		$sum[0]=$info;
	}else{
		$sum[0]=[];
	}

	$json=json_decode($xuzuopinnum);
	$arr=$json->{'num'};
	$data2=array();
	$data3=array();
	$data4=array();
	$data5=array();
	$x2=0;
	$data=array();
	for($x=0;$x<count($arr);$x++)
	{
		$sql2="select * from story where numstory='".$arr[$x]."'";
		$sqll=mysqli_query($conn,$sql2);
		$info=mysqli_fetch_assoc($sqll);
		if($info){
			$data[$x]=$info['openidusm'];
			$data2[$x2]=$info['finishpanding'];
			$data3[$x2]=$info['boolfinish'];
			$data4[$x2]=$info['toupiao_time'];
			$data5[$x2]=$info['mingming_time'];
			$x2++;
		}
	}
	$sum[1]=$data;

	$json1=json_decode($chuangzuopinnum);
	$arr1=$json1->{'num'};
	$data1=array();
	for($x=0;$x<count($arr1);$x++)
	{
		$sql2="select * from story where numstory='".$arr1[$x]."'";
		$sqll=mysqli_query($conn,$sql2);
		$info=mysqli_fetch_assoc($sqll);
		if($info){
			$data1[$x]=$info['openidusm'];
			$data2[$x2]=$info['finishpanding'];
			$data3[$x2]=$info['boolfinish'];
			$data4[$x2]=$info['toupiao_time'];
			$data5[$x2]=$info['mingming_time'];
			$x2++;
		}
	}
	$sum[2]=$data1;
	$sum[3]=$data2;
	$sum[4]=$data3;
	$sum[5]=$data4;
	$sum[6]=$data5;
	echo json_encode($sum);
	mysqli_close($conn);
	//echo $chuangzuopinnum;
	/*$zuopinnum=$_POST['zuopinnum'];
	
	$json=json_decode($zuopinnum);
	$arr=$json->{'num'};
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
	mysqli_close($conn);*/

?>