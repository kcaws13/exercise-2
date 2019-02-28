window.onload=function(){
    function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

insert(num);
function jumlah() {
    var total = document.form.textview.value;
    if (total) {
        document.form.textview.value = eval(total);
    }
}

jumlah();
function clean() {
    document.form.textview.value = "";
}
clean();
function back() {
    var total = document.form.textview.value;
    document.form.textview.value = total.substring(0, total.length - 1);
}
back();
}