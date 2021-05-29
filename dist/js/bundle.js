(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

gsap.to(".bg", {
  duration: 2,
  width: "100%",
  ease: Expo.easeInOut
});

// Navbar
gsap.from(".navbar", {
  duration: 1.5,
  opacity: 0,
  delay: 2.5,
  y: 20,
  ease: Expo.easeInOut
});

// Social Media
gsap.from(".media ul li", {
  duration: 2.8,
  opacity: 0,
  delay: 2.5,
  x: -30,
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.08
  }
});

// Text
gsap.from(".text h1 .hidetext", {
  duration: 1.5,
  delay: 1.6,
  y: "100%",
  ease: Expo.easeInOut
});

gsap.from(".text p .hidetext", {
  duration: 1.5,
  delay: 2,
  y: "100%",
  ease: Expo.easeInOut
});

// Desc
gsap.from(".desc ul li", {
  duration: 1.5,
  delay: 2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.1
  }
});

gsap.from(".desc p", {
  duration: 1.5,
  delay: 2.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

// Scroll Down
gsap.from(".scrolldown", {
  duration: 1.5,
  delay: 2.7,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut
});

// Bottom Nav
gsap.from(".bottomnav", {
  duration: 1.5,
  delay: 3.2,
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut
});
gsap.from(".bottomnav .next", {
  duration: 1.5,
  delay: 3.5,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxLQUFLLEVBQUwsQ0FBUSxLQUFSLEVBQWU7QUFDYixZQUFVLENBREc7QUFFYixTQUFPLE1BRk07QUFHYixRQUFNLEtBQUs7QUFIRSxDQUFmOztBQU9BO0FBQ0EsS0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQjtBQUNuQixZQUFVLEdBRFM7QUFFbkIsV0FBUyxDQUZVO0FBR25CLFNBQU8sR0FIWTtBQUluQixLQUFHLEVBSmdCO0FBS25CLFFBQU0sS0FBSztBQUxRLENBQXJCOztBQVFBO0FBQ0EsS0FBSyxJQUFMLENBQVUsY0FBVixFQUEwQjtBQUN4QixZQUFVLEdBRGM7QUFFeEIsV0FBUyxDQUZlO0FBR3hCLFNBQU8sR0FIaUI7QUFJeEIsS0FBRyxDQUFDLEVBSm9CO0FBS3hCLFFBQU0sS0FBSyxTQUxhO0FBTXhCLFdBQVM7QUFDUCxZQUFRO0FBREQ7QUFOZSxDQUExQjs7QUFXQTtBQUNBLEtBQUssSUFBTCxDQUFVLG9CQUFWLEVBQWdDO0FBQzlCLFlBQVUsR0FEb0I7QUFFOUIsU0FBTyxHQUZ1QjtBQUc5QixLQUFHLE1BSDJCO0FBSTlCLFFBQU0sS0FBSztBQUptQixDQUFoQzs7QUFPQSxLQUFLLElBQUwsQ0FBVSxtQkFBVixFQUErQjtBQUM3QixZQUFVLEdBRG1CO0FBRTdCLFNBQU8sQ0FGc0I7QUFHN0IsS0FBRyxNQUgwQjtBQUk3QixRQUFNLEtBQUs7QUFKa0IsQ0FBL0I7O0FBT0E7QUFDQSxLQUFLLElBQUwsQ0FBVSxhQUFWLEVBQXlCO0FBQ3ZCLFlBQVUsR0FEYTtBQUV2QixTQUFPLENBRmdCO0FBR3ZCLFdBQVMsQ0FIYztBQUl2QixLQUFHLEVBSm9CO0FBS3ZCLFFBQU0sS0FBSyxTQUxZO0FBTXZCLFdBQVM7QUFDUCxZQUFRO0FBREQ7QUFOYyxDQUF6Qjs7QUFXQSxLQUFLLElBQUwsQ0FBVSxTQUFWLEVBQXFCO0FBQ25CLFlBQVUsR0FEUztBQUVuQixTQUFPLEdBRlk7QUFHbkIsV0FBUyxDQUhVO0FBSW5CLEtBQUcsRUFKZ0I7QUFLbkIsUUFBTSxLQUFLO0FBTFEsQ0FBckI7O0FBUUE7QUFDQSxLQUFLLElBQUwsQ0FBVSxhQUFWLEVBQXlCO0FBQ3ZCLFlBQVUsR0FEYTtBQUV2QixTQUFPLEdBRmdCO0FBR3ZCLFdBQVMsQ0FIYztBQUl2QixLQUFHLEdBSm9CO0FBS3ZCLFFBQU0sS0FBSztBQUxZLENBQXpCOztBQVFBO0FBQ0EsS0FBSyxJQUFMLENBQVUsWUFBVixFQUF3QjtBQUN0QixZQUFVLEdBRFk7QUFFdEIsU0FBTyxHQUZlO0FBR3RCLFdBQVMsQ0FIYTtBQUl0QixLQUFHLEVBSm1CO0FBS3RCLFFBQU0sS0FBSztBQUxXLENBQXhCO0FBT0EsS0FBSyxJQUFMLENBQVUsa0JBQVYsRUFBOEI7QUFDNUIsWUFBVSxHQURrQjtBQUU1QixTQUFPLEdBRnFCO0FBRzVCLFdBQVMsQ0FIbUI7QUFJNUIsS0FBRyxDQUFDLEVBSndCO0FBSzVCLFFBQU0sS0FBSztBQUxpQixDQUE5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImdzYXAudG8oXCIuYmdcIiwge1xyXG4gIGR1cmF0aW9uOiAyLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxyXG59KVxyXG5cclxuXHJcbi8vIE5hdmJhclxyXG5nc2FwLmZyb20oXCIubmF2YmFyXCIsIHtcclxuICBkdXJhdGlvbjogMS41LFxyXG4gIG9wYWNpdHk6IDAsXHJcbiAgZGVsYXk6IDIuNSxcclxuICB5OiAyMCxcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxyXG59KVxyXG5cclxuLy8gU29jaWFsIE1lZGlhXHJcbmdzYXAuZnJvbShcIi5tZWRpYSB1bCBsaVwiLCB7XHJcbiAgZHVyYXRpb246IDIuOCxcclxuICBvcGFjaXR5OiAwLFxyXG4gIGRlbGF5OiAyLjUsXHJcbiAgeDogLTMwLFxyXG4gIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxyXG4gIHN0YWdnZXI6IHtcclxuICAgIGFtb3VudDogMC4wOCxcclxuICB9LFxyXG59KVxyXG5cclxuLy8gVGV4dFxyXG5nc2FwLmZyb20oXCIudGV4dCBoMSAuaGlkZXRleHRcIiwge1xyXG4gIGR1cmF0aW9uOiAxLjUsXHJcbiAgZGVsYXk6IDEuNixcclxuICB5OiBcIjEwMCVcIixcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxyXG59KVxyXG5cclxuZ3NhcC5mcm9tKFwiLnRleHQgcCAuaGlkZXRleHRcIiwge1xyXG4gIGR1cmF0aW9uOiAxLjUsXHJcbiAgZGVsYXk6IDIsXHJcbiAgeTogXCIxMDAlXCIsXHJcbiAgZWFzZTogRXhwby5lYXNlSW5PdXRcclxufSlcclxuXHJcbi8vIERlc2NcclxuZ3NhcC5mcm9tKFwiLmRlc2MgdWwgbGlcIiwge1xyXG4gIGR1cmF0aW9uOiAxLjUsXHJcbiAgZGVsYXk6IDIsXHJcbiAgb3BhY2l0eTogMCxcclxuICB5OiAyMCxcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcclxuICBzdGFnZ2VyOiB7XHJcbiAgICBhbW91bnQ6IDAuMSxcclxuICB9XHJcbn0pXHJcblxyXG5nc2FwLmZyb20oXCIuZGVzYyBwXCIsIHtcclxuICBkdXJhdGlvbjogMS41LFxyXG4gIGRlbGF5OiAyLjMsXHJcbiAgb3BhY2l0eTogMCxcclxuICB5OiAyMCxcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxyXG59KVxyXG5cclxuLy8gU2Nyb2xsIERvd25cclxuZ3NhcC5mcm9tKFwiLnNjcm9sbGRvd25cIiwge1xyXG4gIGR1cmF0aW9uOiAxLjUsXHJcbiAgZGVsYXk6IDIuNyxcclxuICBvcGFjaXR5OiAwLFxyXG4gIHk6IDIwMCxcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcclxufSlcclxuXHJcbi8vIEJvdHRvbSBOYXZcclxuZ3NhcC5mcm9tKFwiLmJvdHRvbW5hdlwiLCB7XHJcbiAgZHVyYXRpb246IDEuNSxcclxuICBkZWxheTogMy4yLFxyXG4gIG9wYWNpdHk6IDAsXHJcbiAgeTogMzAsXHJcbiAgZWFzZTogRXhwby5lYXNlSW5PdXQsXHJcbn0pXHJcbmdzYXAuZnJvbShcIi5ib3R0b21uYXYgLm5leHRcIiwge1xyXG4gIGR1cmF0aW9uOiAxLjUsXHJcbiAgZGVsYXk6IDMuNSxcclxuICBvcGFjaXR5OiAwLFxyXG4gIHg6IC0yMCxcclxuICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcclxufSkiXX0=
