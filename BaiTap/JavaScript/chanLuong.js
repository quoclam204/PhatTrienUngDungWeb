function chanLuong() {
    console.log("Bắt đầu tác vụ cần nhiều thời gian xử lý");
    let batDau = Date.now();
    
    while(Date.now()  - batDau < 5000) {
        // Giẳ lập chờ 5 giây bằng vòng lặp 
    }

    console.log("Tác vụ chay 5 giây hoàn tất");
}

console.log("Trước khi chạy tát vụ");
chanLuong();

console.log("Sau khi chạy tác vụ");