<?php
	$leixing=$_POST["leixing"];
	$wengai=$_POST["wengai"];
	$wennei=$_POST["wennei"];
	$openid=$_POST["openid"];
	class openidsum{
		var $openidsum;
		
		function __construct($id){
			$this->openidsum=$id;
		}
	}
	class wenneisum{
		var $wenneisum;
		function __construct($neirong){
			$this->wenneisum=$neirong;
		}
	}
	$arr=array($openid);
	$arr1=array($wennei);
	$obj=new openidsum($arr);
	$obj1=new wenneisum($arr1);
	$json=json_encode($obj);
	
	$json1=addslashes(json_encode($obj1));
	$numstory=substr($openid,0,5).substr($openid,-4);
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql1="INSERT INTO story (numstory,storyname,storytype,storysoso,storycontent,openidusm) VALUES ('".$numstory."','暂无','".$leixing."','".$wengai."','".$json1."','".$json."')";
	//$sql2="INSERT INTO story (storytype,storycontent) VALUES ('".$leixing."','".$wennei."')";
	$sqll=mysqli_query($conn,$sql1);
	if($sqll){
		
		$sql1="select * from wxlogin where openid='".$openid."'";
		$sqll=mysqli_query($conn,$sql1);
		$info=mysqli_fetch_assoc($sqll);
		if(info){
			if($info['zichuangstory']!=null && $info['zichuangstory']!="")
			{
				$jon=json_decode($info['zichuangstory']);
				$arr=$jon->{'num'};
				array_push($arr,$numstory);
				$jon->{'num'}=$arr;
				$json=json_encode($jon);
				$sql1="update wxlogin set zichuangstory='".$json."' where openid='".$openid."'";
				$sqll=mysqli_query($conn,$sql1);
				if($sqll){
					echo "suc2";
				}else{
					echo "fil2";
				}
			}else{
				class zichuang{
					var $num;
					function __construct($num1){
						$this->num=$num1;
					}
				}
				$arr1=array($numstory);
				$zichuangobj=new zichuang($arr1);
				$json=json_encode($zichuangobj);
				$sql1="update wxlogin set zichuangstory='".$json."' where openid='".$openid."'";
				$sqll=mysqli_query($conn,$sql1);
				if($sqll){
					echo "suc1";
				}else{
					echo "fil1";
				}
			}
		}
	}else{
		echo "fail";
	}
	mysqli_close($conn);
?>

