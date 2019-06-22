const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const htmlmin = require('gulp-html-minifier');
const watch = require('gulp-watch');
// function html() {
//   return src('index.html')
//     .pipe(pug())
//     .pipe(dest('build/html'))
// }

function html(){
  
  return watch('./src/index.html', { ignoreInitial: false })
  .pipe(htmlmin({collapseWhitespace: true, ignorePath: '/assets' }))
  .pipe(dest('./'))
}

function css() {
  return src([
  // "css/fontawesome-free-5.9.0-web/css/all.min.css",
  "css/aos.css",
  "css/bootstrap.min.css",
  "styles/main.css"])
  .pipe(concat('app.min.css'))
    .pipe(minifyCSS())
    .pipe(dest('./css'))
}



function js() {
  return watch(
  ["./js/core/jquery.3.2.1.min.js",
  "./js/core/popper.min.js",
  "./js/core/bootstrap.min.js",
  "./js/now-ui-kit.js?v=1.1.0",
  "./js/aos.js",
  "./scripts/main.js"], { ignoreInitial: false })
    .pipe(concat('app.min.js'))
    // .pipe(uglify())
    .pipe(minify())
    .pipe(dest('./js'))
}


 
// gulp.task('stream', function () {
//     // Endless stream mode
//     return 
//         .pipe(gulp.dest('build'));
// });

exports.js = js;
exports.css = css;
exports.html = html;
//exports.default = parallel(html, css, js);
exports.default = parallel(js,css,html);



