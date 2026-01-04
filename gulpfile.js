import gulp, { series } from 'gulp';
import imagemin, {mozjpeg, optipng} from 'gulp-imagemin';

  function copyjs() {
    return gulp.src('src/js/*')
            .pipe(gulp.dest('dist/js'))
  }

  function copymain() {
    return gulp.src('src/*')
            .pipe(gulp.dest('dist'))
  }

  function opitimiseimages() { 
    return gulp.src('src/img/*', { encoding: false })
        .pipe(imagemin([
          mozjpeg({quality: 75, progressive: true}),
          optipng({optimizationLevel: 5})]
        ))
        .pipe(gulp.dest('dist/img'))
  }

export default series(copyjs ,copymain, opitimiseimages);




