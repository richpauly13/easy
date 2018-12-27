const { watch } = require('gulp');
const { exec } = require('child_process');

function docs() {
	return exec('npm run docs');
}

watch('projects/easy/src/lib/**/*.scss', { ignoreInitial: false }, docs);

exports.default = docs;
