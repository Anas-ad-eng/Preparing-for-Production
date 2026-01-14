import gulp from "gulp";
import shell from "gulp-shell";

// تشغيل Parcel (بناء + سيرفر)
gulp.task(
  "default",
   shell.task("npx parcel index.html --open")
);

// تشغيل اختبارات Mocha
gulp.task(
  "test",
  shell.task("npx mocha")
);

// تشغيل اختبارات Cypress
gulp.task(
  "cypress",
  shell.task("npx cypress run")
);
