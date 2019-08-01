<?php
	$storynum=$_POST["storynum"];
	$toupiao_man=$_POST['toupiao_man'];
	$openid=$_POST['openid'];
	$num=1;
	$flag=0;
	$flag1=1;
	$conn=mysqli_connect("localhost","root","123456","wxapp");
	$sql2="select * from story where numstory='".$storynum."'";
	$sqll=mysqli_query($conn,$sql2);
	$info=mysqli_fetch_array($sqll);
	if($info){
		//echo "10";
		$arrm=$info['namesum'];
		$arrmh=json_decode($arrm);
		//echo $arrmh[0]->{'openid'};
		for($i=0;$i<count($arrmh);$i++)
		{
			if($arrmh[$i]->{'openid'}==$toupiao_man)
			{
				$zanman=$arrmh[$i]->{'zanman'};
				if(count($zanman)==0){
					$arrmh[$i]->{'zan'}++;
					array_push($arrmh[$i]->{'zanman'},$openid);
					$flag=1;
				}
				else{
					for($j=0;$j<count($zanman);$j++)
					{
						if($zanman[$j]==$openid)
						{
							echo "已经投过了";
							$flag1=0;
							break;
						}
					}
					if($flag1){
						$arrmh[$i]->{'zan'}++;
						array_push($arrmh[$i]->{'zanman'},$openid);
						$flag=1;
						//echo json_encode($arrmh[$i]);
					}
				}
				
				break;
				//$sql2="update story set namesum='".$json."' where numstory='".$storynum."'"
			}
		}
		if($flag){
			$json=json_encode($arrmh);
			$sql2="update story set namesum='".$json."' where numstory='".$storynum."'";
			$sqll=mysqli_query($conn,$sql2);
			if($sqll){
				echo "success";
			}else{
				echo "没有这个数据";
			}
		}
		
	}else{
		echo "没有这个数据";
	}
	mysqli_close($conn);
?>