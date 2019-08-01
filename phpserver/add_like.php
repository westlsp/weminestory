<?php
	$numstory=$_POST['storynum'];
	$id=$_POST['openid'];
	$conn=mysqli_connect("localhost","root","123456","wxapp");
			$sql2="select * from wxlogin where openid='".$id."'";
			$sqll=mysqli_query($conn,$sql2);
			$info=mysqli_fetch_assoc($sqll);
				if(info)
				{
				if($info['minelike']!=null && $info['minelike']!="")
				{
				$jon=json_decode($info['mine_like']);
				$arr=$jon->{'num'};
				array_push($arr,$numstory);
				$jon->{'num'}=$arr;
				$json=json_encode($jon);
				$sql1="update wxlogin set minelike='".$json."' where openid='".$id."'";
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
				$sql1="update wxlogin set minelike='".$json."' where openid='".$id."'";
				$sqll=mysqli_query($conn,$sql1);
					if($sqll){
					echo "suc1";
					}else{
					echo "fil1";
					}
				}
			}
	mysqli_close($conn);
?>