window.onload = (function(){
    if(document.querySelector('.index')){
        window.addEventListener('scroll', handleScroll);
    }else {
        document.querySelector('.header').style.height = "40px";
    }
});

function handleScroll() {
    const layer1Bottom = document.querySelector('.layer1').getBoundingClientRect().top;

    if (-100 >= layer1Bottom) {
      // 현재 화면 상단 위치가 .layer1 요소 아래를 넘어갔을 때
      document.querySelector('.header').style.height = "40px";
    } else {
      // 현재 화면 상단 위치가 .layer1 요소 아래보다 작을 때
      document.querySelector('.header').style.height = "0px";
    }
  }

function closeModal(target_name){
    document.querySelector(target_name).classList.add('hide');
}

function photoViewing(obj){
    document.getElementById("photo_modal").classList.remove("hide");
    document.getElementById("photo_viewer").style.backgroundImage = "url(" + obj.children[0].src + ")";
    document.getElementById("photo_viewer").style.width = document.getElementById("photo_viewer").offsetHeight;
}

function changeImage(imageName, object) {
  // 이미지 파일명에 따라서 변경
  document.getElementById("detail_studio_image").src='assets/_img/'+ imageName +'.jpg';

  // 같은메뉴를 클릭하지 않을 때, 메뉴 백그라운드 변경
  if(object.classList.value !== 'studio_menu_color'){
    

    // studio_menu_color 라는 class를 찾고 배열로 만듦
    const target_studio = document.getElementsByClassName("studio_menu_color");

    // studio_menu_color class 배열을 for문으로 돌면서, studio_menu_color class 제거
    // i = 0 부터 ~ 배열길이(target_studio.length) 까지 +1씩 상승하며 진행
    for (let i = 0; i < target_studio.length; i++) {
      target_studio[i].classList.remove("studio_menu_color");
    }

    // 선택된 object에 studio_menu_color class 추가
    object.classList.add('studio_menu_color') 
  }
  
}
