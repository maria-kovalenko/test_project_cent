const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

function styles() {
  return gulp
    .src("./app/styles/sass/**/*.*")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(
      cleancss({ level: { 1: { specialComments: 0 } }, format: "beautify" })
    )
    .pipe(gulp.dest("./app/styles/css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: { baseDir: "app/" },
    notify: false,
    online: true,
  });
  gulp.watch("./app/styles/sass/**/*.*", styles);
  gulp.watch("./app/*.html").on("change", browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;
