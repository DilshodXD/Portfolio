let container = document.querySelector('.container').style;

if (window.matchMedia("(max-width: 425px)").matches) {
    document.querySelector('.logo').innerHTML = "";
    document.querySelectorAll('.nav__item')[0].innerHTML = "";
    document.querySelector('.header__bottom-right').innerHTML = '';
    document.querySelector('.about__content-left').innerHTML = "";
    document.querySelector('.about__content-right').innerHTML = "";
    document.querySelector('#link').innerHTML = '';
    document.querySelector('.footer__links').innerHTML = '';
    document.querySelector('.footer__contant').innerHTML = '';
    document.querySelector('#about').innerHTML = `
    <div class="about__inner">
        <div class="about__content">
            <div class="about__content-left"></div>
                <div class="about__content-middle">
                    <div class="about__content-text">
                        <h2 class="about__content-title">Men haqimda</h2>
                        <p class="about__content-subtitle">Hammaga yana bir marotaba salom! Siz bilasizki mening
                            ismim Dilshod. Men haqimda qisqacha malumot: yoshim 18 da, TSTU da talabaman,
                            Workout ga qiziqama va shugullanib turaman. Nega aynan dasturlshni o'rganganimni
                            sorasangiz u kelajak kasbi va menga bu yoqadi. Bolaligimdan ijodni yahshi koraman.
                            Toshkent viloyatining chinoz tumanida yashayman. Front-end dasturchiligi men uchun
                            juda ajoyib kasb va qiziqarli. Har xil kreativ fikirlashlar jarayonlari ayniqsa
                            qiziq. Dasturlashni Proweb o'quv markazida 9 oy mobaynida o'rgandim va undan
                            tashqari imkoniyatlarimdan kelib chiqgan holda bilimlarimni oshirib kelmoqdaman. Ish
                            boshlashdan maqsadim bilimlarimni amalda sinash, malakamni oshirish va yanada tezroq
                            rivojlanishim ucun daromad topish. Maqsadim yanada koproq bilimlarga ega bo'lib
                            Fullstack dasturchi bolish.
                        </p>
                    </div>
                </div>
            </div>
    </div>`;
}

console.log(container); 