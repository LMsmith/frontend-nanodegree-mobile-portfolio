var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss');
	imagemin = require('gulp-imagemin');

//scripts task
//Uglifies JS
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'))
});

//watch task
//watches JS AND CSS
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
	gulp.watch('index.html', ['minify']);
	gulp.watch('**/images/*', ['imagemin']);
});

//styles task
//uglify CSS
gulp.task('styles', function(){
	gulp.src('css/*.css')
	.pipe(uglifycss())
	.pipe(gulp.dest('build/css'))
	.on('error', console.error.bind(console))
});

//imagemin task
//minifies images
gulp.task('imagemin', function(){
	gulp.src('**/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'))
});

gulp.task('default', ['scripts', 'styles', 'watch', 'minify', 'imagemin']);
