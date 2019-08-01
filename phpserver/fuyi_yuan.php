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
		//$json=json_decode("'".$info['storycontent']."'");
		$jon=json_decode($info['fuyi']);
		
		$json=json_decode($info['storycontent']);
		//$json1=json_decode($json);
		$arr=$json->{'wenneisum'};
		array_pop($arr);
		array_push($arr,$jon->{'fuyi_content'});
		array_push($arr,$xushi_content);
		$json->{'wenneisum'}=$arr;
		$jsonstr=addslashes(json_encode($json));
		
		$json1=json_decode($info['openidusm']);
		//$json1=json_decode($json);
		$arr1=$json1->{'openidsum'};
		$lastarr=array_pop($arr1);
			/*$sql2="select * from wxlogin where openid='".$lastarr."'";
			$sqll=mysqli_query($conn,$sql2);
			$info=mysqli_fetch_assoc($sqll);
				if(info)
				{
					
				}*/
		array_push($arr1,$jon->{'fuyi_openid'});
		array_push($arr1,$id);
		$json1->{'openidsum'}=$arr1;
		$jsonstr1=json_encode($json1);
		
		$sql1="update story set xushiing=".$num.",storycontent='".$jsonstr."',fuyi='',openidusm='".$jsonstr1."' where numstory='".$numstory."'";
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