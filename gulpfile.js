const gulp = require("gulp");
const browserSync = require("browser-sync");
const pug = require("gulp-pug");
const prettyHtml = require("gulp-pretty-html");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

gulp.task("pug", function() {
  return gulp
    .src("src/pug/index.pug")
    .pipe(pug())
    .pipe(
      prettyHtml({
        indent_size: 2
      })
    )
    .pipe(gulp.dest("public"))
    .pipe(browserSync.stream());
});

gulp.task("sass", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(gulp.dest("public/dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    port: 3000
  });

  gulp.watch(
    ["src/pug/**", "src/scss/**", "src/js/**"],
    gulp.series("pug", "sass", "js")
  );
});
