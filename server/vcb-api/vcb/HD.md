.# VCB API PAYMENT

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]()

# Các bước cài đặt
1. **Cài đặt MySQL**
    
2. **Tạo database với tên: vcb_payment (utf8_unicode_ci)**

3. **Import data từ file "vcb_payment.sql" trong thư mục chưa sourcecode**

4. **Cài đặt nodejs version 12_x:**
```sh
sudo yum -y update
sudo curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum install -y nodejs
```

5. **Cài đặt PM2**
```sh
sudo npm install pm2 -g
```

6. **Cài đặt Git version 2.x**
```sh
sudo yum -y install https://packages.endpoint.com/rhel/7/os/x86_64/endpoint-repo-1.7-1.x86_64.rpm
sudo yum install git -y
```

7. **upload và Giải nén source về thư mục /home/vcb-sales**
```sh
cd /home/vcb-sales
unzip ten_file.zip
```

8. **Vào thư mục chưa source "/home/vcb-sales" và Cài đặt Packages**
```sh
sudo npm install
```

9. **Chỉnh sửa các cấu hình trong file "config.js" config trong thư mục "/home/vcb-sales/configs**
```sh
sudo vi /home/vcb-sales/configs/config.js
```
> Giải thích:
> - captcha_key là một mãng array chưa danh sách key để giải capcha. Key nào hết tiền sẽ tự chuyển qua key kế tiếp.
> - detect_ip: nên để false

10. **Khởi chạy server**
```sh
cd /home/vcb-sales
sudo pm2 start main.js
```

> Để kiểm tra log thì dùng lệnh: sudo pm2 logs

11. **Mạc định server chạy trên port 9898. Tiến hành mở port**
```sh
sudo iptables -I INPUT -p tcp --dport 9898 -j ACCEPT
```

12. **Kết thúc**

Bây giờ có thể xử dụng server ở địa chỉ: http://IP_CUA_BAN:9898


# Các lệnh hỗ trợ
1. **Pull code mới khi có update version**
```sh
sudo git reset --hard
sudo git pull
cd /home/vcb-sales
sudo npm install
sudo pm2 restart all
```

2. **Restart lại tiến trình**
```sh
sudo pm2 restart all
```

# Các config
```js
module.exports = {
    port: 9898, //port của server - localhost:9898
    db_port: 3308, //port của MySql
    db_host: 'localhost',
    db_user: 'root', //username login db
    db_password: '', //pwd login db
    db_database: 'vcb_payment', //Tên db
    timeZone: "Asia/Ho_Chi_Minh",
    numberMinute2ScanPaymentWhenInsertNewPayment: 10, //cái này không quan trọng
    bankLimit: 0, //cái này không quan trọng
    detect_ip: false, //Nếu set "true" hệ thống sẽ kiểm tra IP gọi đến server
    access_ip: [""], //Danh sách ip được phép gọi đến
    captcha_service: "", // azcaptcha, deathbycaptcha
    captcha_key: [''], //nếu deathbycaptcha thì điền theo cấu trúc username|password, còn azcaptcha thì điền KEY vào là được. "captcha_key" là một mãng array. Nếu hết tiền tài khoản 1 thì nó sẽ tự chuyển qua cái khác.
    lengthInPage: 500 //số lượng giao dịch cần hiển thị. Để thấp thôi. Nhiều quá nó load lâu. 
}
```

# Các API
Copy curl này vào POSTMAN hoặc một phần mềm tương tự để test
1. **Kiểm tra lịch sử giao dịch**
```curl
curl --location --request POST 'http://localhost:9898/api/vcb/transactions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "begin": "06/07/2020",
    "end": "06/08/2020",
    "username": "ten_dang_nhap",
    "password": "mat_khau",
    "accountNumber": ""
}'
```

- **Gỉaỉ thích thông số POST**
```json
{
    "begin": "DD/MM/YYYY",
    "end": "DD/MM/YYYY",
    "username": "ten_dang_nhap_VCB",
    "password": "mat_khau_VCB",
    "accountNumber": "" //để trống hệ thống sẽ lấy stk đầu tiền. Nếu điền thì sẽ kiểm tra stk nhập vào
}
```
