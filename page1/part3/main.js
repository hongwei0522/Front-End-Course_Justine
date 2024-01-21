// 點擊搜尋按鈕跳出搜尋視窗
let popBlack = document.querySelector(".navbar-search-pop-black");
let searchPop = document.querySelector(".navbar-search-pop");
let searchBtn = document.getElementById("search-btn");


searchBtn.addEventListener("click", function () {
    searchPop.classList.toggle("active");
    popBlack.classList.toggle("active");
});

// 點擊黑色區域關閉搜尋視窗
popBlack.addEventListener("click", function () {
    if (popBlack.classList.contains("active")) {
        popBlack.classList.remove("active");
        searchPop.classList.remove("active");
    }
})

