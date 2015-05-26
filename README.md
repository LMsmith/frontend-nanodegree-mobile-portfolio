## Website Performance Optimization portfolio project

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

*Project description: (Part II):
*Obtain a 60 fps framerate for pizza.html
*/

/**
*Optimizations made:
*revised resizePizzas and updatePositions functions to stop forced synchronous layouts
*used Gulp.js to minify images, CSS and JS
*inlined CSS
*used JSDoc to create documentation
*/

/**
*Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
*jank-free at 60 frames per second.
*
*There are two major issues in this code that lead to sub-60fps performance. Can
*you spot and fix both?
*
*
*Built into the code, you'll find a few instances of the User Timing API
*(window.performance), which will be console.log()ing frame rate data into the
*browser console. To learn more about User Timing API, check out:
*http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
*
*Creator:
*Cameron Pittman, Udacity Course Developer
*cameron *at* udacity *dot* com
*/

/**
*Additional resources used:
*https://developers.google.com/speed/docs/insights/ConfigureViewport
*– configure viewport to optimize experience on mobile devices
*gulpjs.com - JS, CSS and images minified with Gulp.js (uglify, uglifycss and imagemin plugins)
*https://www.youtube.com/user/LevelUpTuts – Gulp tutorial on LevelUpTuts youtube channel
*http://usejsdoc.org/about-getting-started.html – documentation created with JSDoc 3
*http://dev.w3.org/csswg/css-font-loading/
*/

/**
*Resizing Pizzas
*resizePizzas function was a source of FSL
*removed determineDx function
*created randomPizzas variable so we don't need to query the DOM  for .randomPizzaContainer multiple times
*removed layout-triggering properties from the changePizzaSizes for-loop
*/

/**
*Updating Positions on scroll
*updatePositions was a source of FSL
*moved phase calculation out of the for-loop
*/

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
