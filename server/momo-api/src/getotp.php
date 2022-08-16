<?php 
	include "class.momo-new.php";

	//Import database

	// Khởi tạo class và điền tên_db, user, pass
	$app = new MOMO('momo', 'user', 'test');

	// Bước 1 lấy OTP
	$result = $app->LoadData('your-momo-number')->sendOTP();

	//Bước 2 Nhập OTP
	//$result = $app->LoadData('')->importOTP('1264');

	//Bước 3: Đăng nhập với mật khẩu
	// $result = $app->LoadData('')->LoginUser('062798');

	// //Bước 3: Sau khi đăng nhập thì TOken sẽ sống trong 1 tiếng nên k cần đăng nhập nữa chỉ cần gọi thẳng bước 5 để lấy LSGD
	//$result = $app->LoadData('')->CheckHisNew(3);

	//echo "<pre>";
	//print_r($result);
	//echo "</pre>";

	//Now converting array to json
	$JSON = json_encode($result);
	//Printing this JSON
	//echo "<pre>";
	print_r($JSON);
	//echo "</pre>";
?>
