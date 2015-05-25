// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

/**
*Project description (Part I):
*Achieve a PageSpeed score of 90 or better for index.html for both mobile and desktop
*/

/**
*Optimizations made:
*used Gulp.js to minify images and CSS
*inlined CSS
*made JS asynchronous
*used JSDoc to create documentation
*/

/**
*PageSpeed scores:
*index.html  --  96 Mobile, 97 Desktop
*project-2048.html  --  94 Mobile, 95 Desktop
*project-webperf.html  -- 96 Mobile, 97 Desktop
*/

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});
