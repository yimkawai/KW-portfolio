function makeMarquee() {
    const title = "keep it simple stupid";
    const marqueeText = new Array(150).fill(title).join('&ensp; • &ensp;');
    const marquee = document.querySelector('.marquee span');
    marquee.innerHTML = marqueeText;
}