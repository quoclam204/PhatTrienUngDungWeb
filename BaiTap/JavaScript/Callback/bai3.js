function hotWheels(tenXe, noiSX) {
    console.log("Tôi muốn mua xe " + tenXe);
    noiSX(); 
    console.log("hahaha")
}

function hangXe2() {
    console.log("Porsche 911 được sản xuất ở Đức ");
    console.log("Vui lòng chờ 5 giây!");

    let batDau = Date.now();
    // while(Date.now() - batDau < 5000) {

    // }
    // console.log("Đã hoàn tất 5 giây");
    setTimeout(() => {console.log("Đã hoàn tất 5 giây");}, 5000);
}

hotWheels("Porsche 911", hangXe2)