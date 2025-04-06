'use strict'

const express = require('express')  // Import thư viện Express

const app = express();  // Tạo một ứng dụng Express

const port = process.env.PORT || 9000  // Định nghĩa cổng chạy server (mặc định 9000)

// Xử lý request khi người dùng truy cập vào trang chủ "/"
app.get("/", (req, res) => {
    res.send('Xin chào tôi tên là Nguyễn Lê Quốc Lâm!!');  // Gửi phản hồi về trình duyệt
})

// Khởi động web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
})
