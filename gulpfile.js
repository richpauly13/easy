var gulp  = require('gulp');
var shell = require('gulp-shell');
var watch = require('gulp-watch');

gulp.task('watch', function() {
	gulp.watch('projects/easy/**/*', gulp.parallel('docs'));
});

gulp.task('docs',
	shell.task('npm run docs')
);

gulp.task('default', gulp.series('docs', 'watch', function(done) { 
	done();
}));
