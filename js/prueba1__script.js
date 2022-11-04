let bodyScroll = document.querySelector(".body");

let imagesListener = document.querySelectorAll(".gallery-item");

let imgSrc = document.querySelector(".info");


let container = document.querySelector(".container");
let imgAnimation = document.querySelector(".div-img-info");
let imgContainer = document.querySelector(".img-container");

container.addEventListener("click", imgOff);

function imgOn()  {
  container.removeAttribute("hidden");
	bodyScroll.style.overflow = "hidden";
}

function imgOff()  {
  container.setAttribute("hidden", true);
  bodyScroll.style.overflow = "scroll";
  imgSrc.classList.remove("img14");
}


bodyScroll.addEventListener("keydown",(e)=>{
  let key = e.keyCode
  if (key == 27) {
    imgOff();
  }
});


imgContainer.addEventListener("click", (e)=> {
  e.stopPropagation();
});


for (let i = 0; i < imagesListener.length; i++) {

    imagesListener[i].addEventListener('click', function() {
      let imageN = i;
      imgOn();
       if (imageN == 0) {
      	imgSrc.setAttribute("src", imgSrcN[0]);
      }
     else if (imageN == 1) {
     	imgSrc.setAttribute("src", imgSrcN[1]);
     }
     else if (imageN == 2) {
     	imgSrc.setAttribute("src", imgSrcN[2]);
     }
     else if (imageN == 3) {
     	imgSrc.setAttribute("src", imgSrcN[3]);
     }
     else if (imageN == 4) {
     	imgSrc.setAttribute("src", imgSrcN[4]);
     }
     else if (imageN == 5) {
     	imgSrc.setAttribute("src", imgSrcN[5]);
     }
     else if (imageN == 6) {
     	imgSrc.setAttribute("src", imgSrcN[6]);
     }
     else if (imageN == 7) {
     	imgSrc.setAttribute("src", imgSrcN[7]);
     }
     else if (imageN == 8) {
     	imgSrc.setAttribute("src", imgSrcN[8]);
     }
     else if (imageN == 9) {
     	imgSrc.setAttribute("src", imgSrcN[9]);
     }
     else if (imageN == 10) {
     	imgSrc.setAttribute("src", imgSrcN[10]);
     }
     else if (imageN == 11) {
     	imgSrc.setAttribute("src", imgSrcN[11]);
     }
     else if (imageN == 12) {
     	imgSrc.setAttribute("src", imgSrcN[12]);
     }
     else if (imageN == 13) {
     	imgSrc.setAttribute("src", imgSrcN[13]);
      imgSrc.classList.add("img14");
     }
     else if (imageN == 14) {
     	imgSrc.setAttribute("src", imgSrcN[14]);
     }
     else if (imageN == 15) {
     	imgSrc.setAttribute("src", imgSrcN[15]);
     }
     else if (imageN == 16) {
     	imgSrc.setAttribute("src", imgSrcN[16]);
     }
     else if (imageN == 17) {
     	imgSrc.setAttribute("src", imgSrcN[17]);
     }
     else if (imageN == 18) {
     	imgSrc.setAttribute("src", imgSrcN[18]);
     }
     else if (imageN == 19) {
     	imgSrc.setAttribute("src", imgSrcN[19]);
     }
     else if (imageN == 20) {
     	imgSrc.setAttribute("src", imgSrcN[20]);
     }
     else if (imageN == 21) {
     	imgSrc.setAttribute("src", imgSrcN[21]);
     }
     else if (imageN == 22) {
     	imgSrc.setAttribute("src", imgSrcN[22]);
     }
     else if (imageN == 23) {
     	imgSrc.setAttribute("src", imgSrcN[23]);
     }
     else if (imageN == 24) {
     	imgSrc.setAttribute("src", imgSrcN[24]);
     }
     else if (imageN == 25) {
     	imgSrc.setAttribute("src", imgSrcN[25]);
     }
     else if (imageN == 26) {
     	imgSrc.setAttribute("src", imgSrcN[26]);
     }
     else if (imageN == 27) {
     	imgSrc.setAttribute("src", imgSrcN[27]);
     }
     else if (imageN == 28) {
     	imgSrc.setAttribute("src", imgSrcN[28]);
     }
     else if (imageN == 29) {
     	imgSrc.setAttribute("src", imgSrcN[29]);
     }
     else if (imageN == 30) {
     	imgSrc.setAttribute("src", imgSrcN[30]);
     }
     else if (imageN == 31) {
     	imgSrc.setAttribute("src", imgSrcN[31]);
     }
    });
}



const imgSrcN = [
	"../multimedia/images/galeria-prueba/i-hu-03.jpg",
	"https://fondosmil.com/fondo/17010.jpg",
	"https://i.loli.net/2021/10/28/nEeONVpkx3wZFzG.png",
	"https://images.wallpapersden.com/image/download/age-of-empires-iv-hd-cool-4k-gaming_bG5na2iUmZqaraWkpJRobWllrWdma2U.jpg",
	"https://images7.alphacoders.com/983/983225.jpg",
	"../multimedia/images/galeria-prueba/i-ku-02.jpg",
	"https://pixewall.com/wp-content/uploads/2021/03/ultraviolet-4k-wallpaper-2560%C3%971600.jpg",
	"https://wallpaperaccess.com/full/3497712.jpg",
	"https://pixelz.cc/wp-content/uploads/2019/12/legends-of-runeterra-ashe-uhd-4k-wallpaper.jpg",
	"https://external-preview.redd.it/6rP6f14VtOUHkmiaQFgKTEuh-o5JWhsgVG_GGELIdhM.jpg?auto=webp&s=f261546e3507de323929d37bb53b0db128e4f668",
	"https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-4K-Wallpaper-3840x2160.jpg",
	"../multimedia/images/galeria-prueba/i-ro-05.jpg",
	"http://s1.picswalls.com/wallpapers/2016/06/10/4k-hd-wallpapers_065228558_309.jpg",
	"https://i0.wp.com/fondosmil.com/fondo/13861.png",
	"https://wallpaperaccess.com/full/3494477.jpg",
	"../multimedia/images/galeria-prueba/i-fi-01.jpg",
	"https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg",
	"../multimedia/images/galeria-prueba/i-ey-04.jpg",
	"https://i.redd.it/ag3mxc4wqbm91.jpg",
	"https://wallpaperaccess.com/full/1713248.jpg",
	"https://fondosmil.com/fondo/4528.jpg",
	"https://www.xtrafondos.com/descargar.php?id=3089&resolucion=3840x2160",
	"https://images.hdqwalls.com/wallpapers/abstract-colorful-design-4k-5o.jpg",
	"https://a-static.besthdwallpaper.com/virtual-youtuber-brimming-eyes-wallpaper-2048x1152-73146_49.jpg",
	"https://cdn-cf-east.streamable.com/image/7x7jnl.jpg?Expires=1640137260&Signature=PIhp64gn8yvr4huZa8TeiQwl~DZRmmI5L~jrZiE7RjqmQ1bQQl26YT~t1bANOP-byGnZ1EksW3vrtOah3XUDGKY~awaHSE-B~DTOzxPNFAMJI~70bl6MiAq5koO2GhEkBpegpHoTvmjta1uMMMuGEwwtiRaYed-V-VUgi1NDkVKCAHMuOQXDZU6rcavdBoYH3a-j~tV105G79JPzREiVCX7iMIQXuGkjjDNWQt0u6q-SrtlC2m~C~WhFnGQLbvl1nom8fQfh1Ts8432VkET8FarIXy-1Czf6LHGUVx9nGlthJ6Tf5r4BLZ1Zs7vgDxvLhVfE7Vcm1Nq5T5gpMfQcww__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
	"https://www.xtrafondos.com/descargar.php?id=5703&resolucion=3840x2158",
	"https://wallpapercave.com/wp/wp3614456.jpg",
	"https://wallpaperbat.com/img/30919-abstract-gaming-wallpaper-1080p.jpg",
	"https://wallpapercave.com/wp/wp6940846.jpg",
	"https://cdn.wallpapersafari.com/63/41/r6OVl4.jpg",
	"https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
];
