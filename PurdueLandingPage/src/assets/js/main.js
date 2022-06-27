$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: false,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 4
                }
            }
        });            
    }

})


document.addEventListener('click',function(e){
  console.log("yerrrr===")
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})


console.log("yerrr")

// const handleParentClick = (e) => {
//   e.stopImmediatePropagation();
//   console.log("parent is clicked");
// };

// const handleChildClick = () => {
//   console.log("child is clicked");
// };

// const activeMenuIcon = () => {
//   //gets all icons which will have slider
//   const activeIcons = document.querySelectorAll(".has-slider");

//   if (activeIcons.length !== 0) {
//     activeIcons.forEach((el) => {
//       $(el.firstElementChild).on("click", (e) => {
//         let sliderTarget = e.currentTarget.nextElementSibling;

//         let active = isActive(e.currentTarget.parentElement);
//         let activeMenuIcon = document.querySelectorAll(".active");
//         sliderTarget.classList.remove("no-animation");
//         for (let el of activeMenuIcon) {
//           el.classList.remove("active");
//           if (el.querySelector(".nav-slider")) {
//             el.querySelector(".nav-slider").classList.remove(
//               "slide-in",
//               "slide-out"
//             );
//           }
//         }
//         if (active) {
//           e.currentTarget.classList.remove("active");
//           if (sliderTarget) {
//             //move slider logic to seperate function
//             sliderTarget.classList.remove("slide-in");
//             sliderTarget.classList.add("slide-out");
//           }
//         } else {
//           e.currentTarget.parentElement.classList.add("active");

//           sliderTarget.classList.remove("slide-out");
//           sliderTarget.classList.add("slide-in");
//         }
//       });
//     });
//   }
// };

// const closeSearch = () => {
//   const closeButton = document.querySelector('#nav-search-toggle')
//   const searchIcon = document.querySelector('#search').getElementsByClassName('nav-slider')[0]
//   closeButton.addEventListener('click', () => {
//     searchIcon.setAttribute('class',' nav-slider sub-menu slide-out')
//      searchIcon.parentElement.classList.remove('active')
      
//   })
// }

// const menuSlider = () => {
//   var sliderElements = document.querySelectorAll(".sub-menu .level-1");

//   sliderElements.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       const active = isActive(e.currentTarget);
//       const elm = document.querySelector(".level-1");

//       for (let el of sliderElements) {
//         el.classList.remove("active");
//       }
//       if (active) {
//         e.currentTarget.classList.remove("active");
//         if ((e.currentTarget === elm) === false) {
//           elm.classList.remove("active");
//         }
//       } else {
//         e.currentTarget.classList.add("active");
//       }
//     });
//   });
// };

// const megaMenu = () => {
//   let megaMenu = document.getElementById("mega-menu");
//   $(megaMenu).on("keydown", "li a", keyboardHelper);
// };
// const keyboardHelper = (e) => {
//   let target = e.target;
//   let key = e.key;
//   switch (key) {
//     case "ArrowRight":
//       say("right");

//       if (isTopLevel(target)) {
//         let nextElement = adjacentTopLevel(target, "next");
//         if (nextElement) {
//           e.preventDefault();
//           nextElement.focus();
//           openDropdown(target);
//         }
//       } else {
//         let nextDropElement = adjacentDropdownItem(target, "next");
//         if (nextDropElement) {
//           e.preventDefault();
//           nextDropElement.focus();
//         }
//       }
//       break;
//     case "ArrowLeft":
//       say("left");
//       if (isTopLevel(target)) {
//         let prevTopItem = adjacentTopLevel(target, "prev");

//         if (prevTopItem) {
//           e.preventDefault();
//           prevTopItem.focus();
//         }
//       } else {
//         let prevDropItem = adjacentDropdownItem(target, "prev");
//         if (prevDropItem) {
//           e.preventDefault();
//           prevDropItem.focus();
//         }
//       }
//       break;
//     case "ArrowDown":
//       say("down");
//       if (isTopLevel(target) && hasSlider(target)) {
//         // top level item w/ dropdown -- open dropdown
//         openDropdown(target);
//       } else {
//         // dropdown item
//         let nextDropItem = adjacentDropdownItem(target, "next");

//         if (nextDropItem) {
//           e.preventDefault();
//           nextDropItem.focus();
//         }
//       }
//       break;
//     case "ArrowUp":
//       say("up");
//       if (!isTopLevel(target)) {
//         if (isTopLevel(target)) {
//           e.preventDefault();
//           let top = closeDropdown(target);
//           setTimeout(function () {
//             top.focus();
//           }, 0);
//         } else {
//           let prevDropAnchor = adjacentDropdownItem(target, "prev");

//           if (prevDropAnchor) {
//             e.preventDefault();
//             prevDropAnchor.focus();
//           }
//         }
//       }
//       break;
//     case "Escape":
//       say("escape");
//       if (!isTopLevel(target)) {
//         closeDropdown(target);
//         let droplet = $(target).closest(".droplet")[0];
//         let topItem = $(droplet).prev()[0];
//         setTimeout(function () {
//           topItem.focus();
//         }, 0);
//       }
//       break;
//     case "Tab":
//       say("tab");
//       if (!isTopLevel(target) && isLastDropItem(target)) {
//         e.preventDefault();
//         closeDropdown(target);
//         let droplet = $(target).closest(".droplet")[0];
//         let topItem = $(droplet).prev()[0];
//         let nextLi = $(topItem.parentNode).next()[0];
//         let nextAnchor = $("a", nextLi)[0];
//         nextAnchor.focus();
//       }
//       break;
//     case "Backspace":
//       say("backspace");
//       break;
//     case "Enter":
//       // target.click()
//       say("enter");
//       break;
//     default:
//       say("default");
//   }
// };

// const isTopLevel = (el) => {
//   return $(el).is("#mega-menu > li > a");
// };
// function hasSlider(el) {
//   return $(el.parentNode).hasClass("has-slider");
// }

// const adjacentTopLevel = (el, dir) => {
//   let adjacentElement = dir === "next" ? $(el).next()[0] : $(el).prev()[0];
//   return adjacentElement;
// };

// const adjacentDropdownItem = (el, dir) => {
//   let adjacentDropItem;
//   let li = el.parentNode;
//   let adjacentSameCol = dir === "next" ? $(li).next()[0] : $(li).prev()[0];
//   if (adjacentSameCol) {
//     adjacentDropItem = $("a", adjacentSameCol)[0];
//   } else {
//     let col = $(li).closest(".col")[0];
//     let adjacentCol = dir === "next" ? $(col).next()[0] : $(col).prev()[0];
//     if (adjacentCol) {
//       let adjacentItem =
//         dir === "next"
//           ? $("li a", adjacentCol)[0]
//           : $("li a", adjacentCol).last()[0];
//       if (adjacentItem) {
//         adjacentDropItem = adjacentItem;
//       }
//     }
//   }
//   return adjacentDropItem;
// };

// function openDropdown(el) {
//   let droplet = $(el).next()[0];
//   droplet.click();

//   $(".has-slider").removeClass("active");
//   if ($(window).width() < $breakpoint) {
//     droplet;

//     say("opendown 1");
//   } else {
//     say("opendown 2");
//   }
// }

// function isLastDropItem(item) {
//   let drop = $(item).closest(".sub-menu")[0];

//   let lastInDrop = $("li a", drop).last()[0];
//   return lastInDrop === item;
// }
// function closeDropdown(item) {
//   let droplet = $(item).next();
//   if ($(window).width() < $breakpoint) {
//     $(droplet).removeClass("active");
//     $("#mobile-menu").show();
//   } else {
//     $(droplet).slideUp(100);
//   }
//   $(item).parent().removeClass("active");
// }

// const say = (str) => {
//   console.log(str);
// };
// const isActive = (el) => {
//   return el.classList.contains("active");