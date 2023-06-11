
// 장바구니 드롭다운 메뉴 영역
const basketStarterEl = document.querySelector('.header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click',function (event) {
    event.stopPropagation();
   if(basketEl.classList.contains('show')){
    //hide
    hideBasket();
   }else{
    //show
   showBasket();
   }
});
// 장바구니 안에서 꺼짐현상 제거
basketEl.addEventListener('click',function (event) {
    event.stopPropagation();
});

window.addEventListener('click',function (){
    //드롭메뉴 hide
   hideBasket();
});

function showBasket() { // 복잡한 개념을 추상화 하였음
    basketEl.classList.add('show')
}
function hideBasket() {
    basketEl.classList.remove('show')
}

// 검색 영역!
const headerEl = document.querySelector('.header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]; // 전개연산자를 통한 얕은 복사
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
    headerEl.classList.add('searching');
    document.documentElement.classList.add('fixed'); // document 최상위 문서 -> html
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    });
    searchDelayEls.forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    });
    setTimeout(function () {
        searchInputEl.focus();
    }, 600);
    
}
function hideSearch() {
    headerEl.classList.remove('searching');
    document.documentElement.classList.remove('fixed');
    headerMenuEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    });
    searchDelayEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    });
    searchDelayEls.reverse();
    searchInputEl.value = '';
}

// 요소의 가시성 관찰 power영역 등 info 영역
const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if(!entry.isIntersecting){
            return
        }
        entry.target.classList.add('show');
    });
});
const infoEls = document.querySelectorAll('.info');
infoEls.forEach(function(el) {
    io.observe(el);
});