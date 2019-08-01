<?php
	$storynum=$_POST['storynum'];
	$openid=$_POST['openid'];
	$flag=1;
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from story where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info)
	{
		$openidsum=$info['openidusm'];
		if($info['zan']==null)
		{
			class zan{
				var $zanman;
				function __construct($zanman1){
					$this->zanman=$zanman1;
				}
			}
			$arr1=array();
			array_push($arr1,$openid);
			$obj=new zan($arr1);
			$json=json_encode($obj);
			echo $json;
			$sql2="update story set zan='".$json."' where numstory='".$storynum."'";
			$sqll=mysqli_query($conn,$sql2);
			if($sqll){
				$json=json_decode($openidsum);
				$arr=$json->{'openidsum'};
				for($x=0;$x<count($arr);$x++)
				{
					$sql2="update wxlogin set zansum=zansum+1 where openid='".$arr[$x]."'";
					$sqll=mysqli_query($conn,$sql2);
					if($sqll){
						echo "加赞成功";
					}
					else
					{
						echo "fail4";
					}
				}
			}else{
				echo "fail3";
			}
		}
		else
		{
			$json=json_decode($info['zan']);
			$arr=$json->{'zanman'};
			for($x=0;$x<count($arr);$x++)
			{
				if($arr[$x]==$openid)
				{
					echo "你已经点过赞了";
					$flag=0;
					break;
				}
			}
			if($flag==1)
			{
				array_push($arr,$openid);
				$json->{'zanman'}=$arr;
				$jsonstr=json_encode($json);
				$sql2="update story set zan='".$jsonstr."' where numstory='".$storynum."'";
				$sqll=mysqli_query($conn,$sql2);
				if($sqll){
					$json=json_decode($openidsum);
					$arr=$json->{'openidsum'};
					for($x=0;$x<count($arr);$x++)
					{
						$sql2="update wxlogin set zansum=zansum+1 where openid='".$arr[$x]."'";
						$sqll=mysqli_query($conn,$sql2);
						if($sqll){
							echo "加赞成功";
						}
						else
						{
							echo "fail4";
						}
					}
				}else{
					echo "fail2";
				}
			}
		}
	}
	else{
		echo "fail1";
	}
	mysqli_close($conn);
?>