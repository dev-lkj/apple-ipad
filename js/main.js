
// 드롭다운 메뉴 영역
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