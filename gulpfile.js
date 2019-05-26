const gulp = require("gulp");
const browserSync = require("browser-sync");
const pug = require("gulp-pug");
const prettyHtml = require("gulp-pretty-html");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const sassGlob = require("gulp-sass-glob");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

gulp.task("pug", function() {
  return gulp
    .src(["src/pug/views/**/*.pug", "src/pug/views/**/**/*.pug"])
    .pipe(pug())
    .pipe(
      prettyHtml({
        indent_size: 2
      })
    )
    .pipe(gulp.dest("public/demo"))
    .pipe(browserSync.stream());
});

gulp.task("sass", function(clean) {
  let themes = ["default", "comfort", "candy", "sport", "mint"];

  themes.forEach(function(theme) {
    return gulp
      .src(["src/scss/_color.scss", "src/scss/themes/" + theme + ".scss"])
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(concat(theme + ".css"))
      .pipe(gulp.dest("public/dist/css/themes"))
      .pipe(browserSync.stream());
  }, clean());
});

gulp.task("sass-min", function(clean) {
  let themes = ["default", "comfort", "candy", "sport", "mint"];

  themes.forEach(function(theme) {
    return gulp
      .src(["src/scss/_color.scss", "src/scss/themes/" + theme + ".scss"])
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(concat(theme + ".css"))
      .pipe(csso())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("public/dist/css/themes"))
      .pipe(browserSync.stream());
  }, clean());
});

gulp.task("sass-pkg", function() {
  return gulp
    .src(["node_modules/choices.js/public/assets/styles/choices.min.css"])
    .pipe(gulp.dest("public/dist/css"));
});

gulp.task("js", function() {
  return gulp
    .src(["src/js/components/*.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("js-demo", function() {
  return gulp
    .src(["src/js/demo/*.js"])
    .pipe(concat("demo.js"))
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("js-min", function() {
  return gulp
    .src(["public/dist/js/main.js", "public/dist/js/demo.js"])
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("js-pkg", function() {
  return gulp
    .src([
      "node_modules/choices.js/public/assets/scripts/choices.min.js",
      "node_modules/sortablejs/Sortable.min.js"
    ])
    .pipe(gulp.dest("public/dist/js/lib"))
    .pipe(browserSync.stream());
});

gulp.task("serve", function() {
  browserSync.init({
    port: 3000,
    // open: false,
    files: ["*.html"],
    startPath: "./public/demo/dashboards/ecommerce.html",
    server: {
      baseDir: ".",
      index: "./public/demo/dashboards/ecommerce.html"
    }
  });

  gulp.watch("src/pug/**", gulp.series("pug"));
  gulp.watch("src/scss/**", gulp.series("sass"));
  gulp.watch("src/js/**", gulp.series(["js", "js-demo"]));
});
