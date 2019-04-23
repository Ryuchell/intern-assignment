// 課題1
function calc(data) {
    if (data == "=") {
		document.form.textName.value =
	    eval(document.form.textName.value);
    } else if (data == "C") {
		document.form.textName.value = "";
    } else {
		document.form.textName.value += data;
    }
}
// メール設定
function send(email) {
	if (email == 'go'){
		Email.send(
		"respsteve22@gmail.com",
	    "nomadiclife.ryu@gmail.com",
	    "計算情報",
	    "計算情報が送られてきました。",
	    "smtp.elasticemail.com",
	    "respsteve22@gmail.com",
	    "57d62513-500e-418c-b955-0bd49bec9d08");
	}
}
// 課題2
function rotate(angle) {
	if (angle == "cal") {
		var x = document.form2.x1Name.value;
		var y = document.form2.y1Name.value;
		var θ = document.form2.θ.value;
		var rad = θ*(Math.PI / 180);

		document.form2.x2Name.value = x*Math.cos(rad)-y*Math.sin(rad);
		document.form2.y2Name.value = x*Math.sin(rad)+y*Math.cos(rad);
		// document.form2.x2Name.value = Math.cos(rad);
		// document.form2.y2Name.value = Math.sin(rad);

	}
}