<?php
	$numstory=$_POST['storynum'];
	$id=$_POST['id'];
	$xushi_content=$_POST['xushi_content'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$num=0;
	$sql2="select * from story where numstory='".$numstory."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_assoc($sqll);
	if($info){
		
		class fuyi{
				var $fuyi_content;
				var $fuyi_openid;
				function __construct($fuyi_content1,$fuyi_openid1){
					$this->fuyi_content=$fuyi_content1;
					$this->fuyi_openid=$fuyi_openid1;
				}
			}
		$obj=new fuyi($xushi_content,$id);
		$jsonstr=addslashes(json_encode($obj));
		
		$sql1="update story set xushiing=".$num.",fuyi='".$jsonstr."' where numstory='".$numstory."'";
		$sqll=mysqli_query($conn,$sql1);
		if(sqll){
			$sql2="select * from wxlogin where openid='".$id."'";
			$sqll=mysqli_query($conn,$sql2);
			$info=mysqli_fetch_assoc($sqll);
				if(info)
				{
				if($info['xushistory']!=null && $info['xushistory']!="")
				{
				$jon=json_decode($info['xushistory']);
				$arr=$jon->{'num'};
				array_push($arr,$numstory);
				$jon->{'num'}=$arr;
				$json=json_encode($jon);
				$sql1="update wxlogin set xushistory='".$json."' where openid='".$id."'";
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
				$sql1="update wxlogin set xushistory='".$json."' where openid='".$id."'";
				$sqll=mysqli_query($conn,$sql1);
					if($sqll){
					echo "suc1";
					}else{
					echo "fil1";
					}
				}
			}
		}else{
			echo "fail1";
		}
		
	}else{
		echo "fail";
	}
	/*$sql1="update story set xushiing=".$num." where numstory='".$numstory."'";
	"update story set storycontent='".$jsonstr."',xushiing=".num."where numstory='".$numstory."'";
	if($sqll){
		echo "success";
	}else{
		echo "没有这个数据";
	}*/
	mysqli_close($conn);
?>