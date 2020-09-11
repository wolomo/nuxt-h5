// (function (win) {
//     var ratio, scaleValue, renderTime,
//         document = window.document,
//         docElem = document.documentElement,
//         vpm = document.querySelector('meta[name="viewport"]');
//
//     if (vpm) {
//         var tempArray = vpm.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
//         if (tempArray) {
//             scaleValue = parseFloat(tempArray[2]);
//             ratio = parseInt(1 / scaleValue);
//         }
//     } else {
//         vpm = document.createElement("meta");
//         vpm.setAttribute("name", "viewport");
//         vpm.setAttribute("content", "width=device-width, initial-scale=1, user-scalable=no, minimal-ui");
//         docElem.firstElementChild.appendChild(vpm);
//     }
//
//     win.addEventListener("resize", function () {
//         clearTimeout(renderTime);
//         renderTime = setTimeout(initPage, 300);
//     }, false);
//
//     win.addEventListener("pageshow", function (e) {
//         e.persisted && (clearTimeout(renderTime), renderTime = setTimeout(initPage, 300));
//     }, false);
//
//     "complete" === document.readyState ? document.body.style.fontSize = 12 * ratio + "px" : document.addEventListener("DOMContentLoaded", function () {
//         document.body.style.fontSize = 12 * ratio + "px";
//     }, false);
//
//     initPage();
//
//     function initPage() {
//         var htmlWidth = docElem.getBoundingClientRect().width;
//         htmlWidth / ratio > 540 && (htmlWidth = 540 * ratio);
//         win.rem = htmlWidth / 16;
//         docElem.style.fontSize = win.rem + "px";
//     }
// })(window);


fnResize()
window.onresize = function () {
  fnResize()
}
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.documentElement.style.fontSize = (deviceWidth / 75*2) + 'px'
}
