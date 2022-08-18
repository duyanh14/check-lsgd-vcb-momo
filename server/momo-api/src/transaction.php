<?php 
	include "class.momo-new.php";

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');
	header('Access-Control-Allow-Methods: PUT, DELETE, POST, GET');

	//Import database

	// Khởi tạo class và điền tên_db, user, pass
	$app = new MOMO('momo', 'user', 'test');

	// Bước 1 lấy OTP
	//$result = $app->LoadData('0903048200')->sendOTP();

	//Bước 2 Nhập OTP
	//$result = $app->LoadData('0903048200')->importOTP('1264');

	//Bước 3: Đăng nhập với mật khẩu
	//$result = $app->LoadData('0903048200')->LoginUser('062798');

	// //Bước 3: Sau khi đăng nhập thì TOken sẽ sống trong 1 tiếng nên k cần đăng nhập nữa chỉ cần gọi thẳng bước 5 để lấy LSGD
	$result = $app->LoadData('0903048200')->CheckHisNew(3);

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
