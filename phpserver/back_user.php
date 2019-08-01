<?php
	$img=$_FILES['file_img'];
	$openid=$_POST['openid'];
	$form_data = $img['tmp_name'];
	//$imgBlob =addslashes(file_get_contents($form_data)); //1
	//$data=addslashes(fread(fopen($form_data, "r"), filesize($form_data)));//2
	if(move_uploaded_file($form_data,'./back_user/'.$img['name'])){
        $imgurl='http://47.101.55.60/wxapp/back_user/'.$img['name'];
		$conn=mysqli_connect("localhost","root","123456","wxapp");
		//$sql2="select * from wxlogin where openid='".$openid."' and name='".$name."'";
		$sql2="update wxlogin set backurl='".$imgurl."' where openid='".$openid."'";
		//$sql2="select * from wxlogin where openid='".$openid."'";
		$sqll=mysqli_query($conn,$sql2);
		if($sqll){
			echo "success";
		}else{
			echo "fail1";
		}
    }else{
        echo "fail2";
    }
	mysqli_close($conn);
?>