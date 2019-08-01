<?php
	$storynum=$_POST["storynum"];
	$name=$_POST['name'];
	$openid=$_POST['openid'];
	$num=1;
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from story where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info)
	{
		if($info['namesum']==null)
		{
			class namesum{
				var $name;
				var $zan;
				var $openid;
				var $zanman;
				function __construct($name1,$zan1,$openid1,$zanman1){
					$this->name=$name1;
					$this->zan=$zan1;
					$this->openid=$openid1;
					$this->zanman=$zanman1;
				}
			}
			//$arr=array($name);
			$arr1=array();
			$obj=new namesum($name,0,$openid,$arr1);	
			$arr=array($obj);
			$json=json_encode($arr);
			$sql2="update story set namesum='".$json."' where numstory='".$storynum."'";
			$sqll=mysqli_query($conn,$sql2);
			if($sqll){
				echo "success";
			}else{
				echo "没有这个数据";
			}
		}
		else{
			$arrm=$info['namesum'];
			class namesum{
				var $name;
				var $zan;
				var $openid;
				var $zanman;
				function __construct($name1,$zan1,$openid1,$zanman1){
					$this->name=$name1;
					$this->zan=$zan1;
					$this->openid=$openid1;
					$this->zanman=$zanman1;
				}
			}
			$arr1=array();
			$obj=new namesum($name,0,$openid,$arr1);	
			$arrmh=json_decode($arrm);
			array_push($arrmh,$obj);
			$json=json_encode($arrmh);
			$sql2="update story set namesum='".$json."' where numstory='".$storynum."'";
			$sqll=mysqli_query($conn,$sql2);
			if($sqll){
				echo "success";
			}else{
				echo "没有这个数据";
			}
			//gettype()
		}
	}
	else{
		echo "fail";
	}
	/*$sql2="update story set storyname='".$name."' where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	if($sqll){
		echo "success";
	}else{
		echo "没有这个数据";
	}*/
	mysqli_close($conn);
?>