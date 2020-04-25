// class Scroller {
//   /**
//    * Start scrolling, will stop automatically when `distance` is reached
//    * @param {HTMLElement} element Element to scroll
//    * @param {Number} distance Target distance to scroll
//    * @param {Number} speed Initial scroll speed (px per update)
//    * @param {Number} maxSpeed Max scroll speed (px per update)
//    * @param {Number} acceleration Added to `speed` on each scroll, up to `maxSpeed`
//    * @param {Function} callback Callback to call when done scrolling
//    * @param {Function} scrollFn Function to call instead of setting `scrollTop` on the element
//    */
//   static scroll({ element, distance = 50000, speed = 5, maxSpeed = 1000, acceleration = 1, callback, scrollFn }) {
//       let scrollTop = 0;

//       console.log('Starting to scroll', element);

//       const intervalId = setInterval(() => {
//           if (scrollFn) {
//               scrollFn(scrollTop)
//           } else {
//               element.scrollTop = scrollTop;
//           }

//           scrollTop += speed;

//           if (speed < maxSpeed) {
//               speed += acceleration;
//           }

//           if (scrollTop > distance) {
//               clearInterval(intervalId);

//               console.log('Finished scrolling');

//               callback && callback();
//           }
//       }, 1);
//   }
// }