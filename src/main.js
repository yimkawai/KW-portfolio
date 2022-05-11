function makeMarquee() {
    const title = "keep it simple stupid";
    const marqueeText = new Array(150).fill(title).join('&ensp; • &ensp;');
    const marquee = document.querySelector('.marquee span');
    marquee.innerHTML = marqueeText;
}

makeMarquee();


var myStringArray = ["https://www.linkedin.com/in/kawaii","https://github.com/yimkawai", "https://twitter.com/devignery", "https://instagram.com/aboar"]; 
var myStringArray2 = ["linkedin", "github", "twitter", "instagram"];
var myStringArray3 = ["✌︎", "＃", "✎", "ツ"]
var result = ""
for (var i = 0; i < myStringArray.length; i++) {
    result = result + " " + myStringArray3[i] + " " + " <a href='" + myStringArray[i] + "'>" + myStringArray2[i] + "</a>";
}

function makeMarquee2() {
    const info = result;
    const mq = new Array(150).fill(info).join(' ');
    document.getElementById('mqInfo').innerHTML = mq

}

makeMarquee2();


var mail = document.createElement("a");
mail.href = "yimkawaii@gmail.com";
mail.innerHTML = "✉ yimkawaii@gmail.com";

function makeMarquee3() {
    const info = mail.innerHTML;
    const mq = new Array(150).fill(info).join(' ');
    document.getElementById('mqEmail').innerHTML = mq;
}

makeMarquee3();