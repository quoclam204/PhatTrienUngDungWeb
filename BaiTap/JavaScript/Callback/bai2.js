function xinChao(ten, callback) {
    console.log("Xin chào", ten);
    callback()
}

function loiChao() {
    console.log("Chúc bạn một ngày mới tốt lành!");
}

xinChao("Lâm", loiChao)