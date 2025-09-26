import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import mozjpeg from "imagemin-mozjpeg";
import optipng from "imagemin-optipng";
import svgo from "imagemin-svgo";

export const images = () => {
  return app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp({ quality: 75 }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      imagemin([
				mozjpeg({ quality: 75 }), 
				optipng({ optimizationLevel: 5 })]),
				svgo({ plugins: [{ name: "removeViewBox", active: false }] }),
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
