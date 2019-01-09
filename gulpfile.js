const gulp = require("gulp");
const browserSync = require("browser-sync");
const pug = require("gulp-pug");
const prettyHtml = require("gulp-pretty-html");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

gulp.task("pug", function() {
  return gulp
    .src("src/pug/views/*/*.pug")
    .pipe(pug())
    .pipe(
      prettyHtml({
        indent_size: 2
      })
    )
    .pipe(gulp.dest("public/demo"))
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

gulp.task("sass-pkg", function() {
  return gulp
    .src(["node_modules/choices.js/public/assets/styles/choices.min.css"])
    .pipe(gulp.dest("public/dist/css"));
});

gulp.task("js", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("js-pkg", function() {
  return gulp
    .src([
      "node_modules/choices.js/public/assets/scripts/choices.min.js",
      "node_modules/sortablejs/Sortable.min.js"
    ])
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "public",
      index: "demo/dashboards/ecommerce.html"
    },
    port: 3000
  });

  // gulp.watch(
  //   ["src/pug/**", "src/scss/**", "src/js/**"],
  //   gulp.parallel("pug", "sass", "js")
  // );

  gulp.watch("src/pug/**", gulp.series("pug"));
  gulp.watch("src/scss/**", gulp.series("sass"));
  gulp.watch("src/js/**", gulp.series("js"));
});
