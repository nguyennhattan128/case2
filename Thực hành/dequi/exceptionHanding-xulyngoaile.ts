function isNum(number){
    if(number>1){
        throw EvalError('Meo Meo')
    }
    return true;
}

try{
    console.log(isNum(5))
} catch (e){// e là lỗi ở bên trên
    console.log('lỗi rồi')
} finally {
    console.log('Đóng kết nôi tới dữ liệu')
}