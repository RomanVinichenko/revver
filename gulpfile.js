const { src, dest, watch, parallel, series } = require('gulp');


const browserSync = require('browser-sync').create();
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-html-minifier-terser');
const concat = require('gulp-concat');
const del = require('del');

const browsersync = () => {
    browserSync.init({
        server: {
            baseDir: 'app/',
        },
        notify: false,
    });
};

const watching = () => {
    watch(['app/*.html']).on('change', browserSync.reload);
    watch(['app/scss/**/*.scss'], styles);
    watch(['!app/js/main.js', '!app/js/faq.js', '!app/js/inner.js', 'app/js/home.js', 'app/js/about.js'], scripts);
};

const htmls = () => {
    return src('app/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist/'));
};

const styles = () => {
    return src('app/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 10 version'],
                grid: true,
            }),
        )
        .pipe(sourcemaps.write('.'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
};

const scripts = () => {
    return src(['app/js/main.js', 'app/js/faq.js', 'app/js/inner.js',  'app/js/home.js', 'app/js/about.js'])
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
};

const cleanDist = () => {
    return del('dist');
};



const build = () => {
    return src(
        [
            'app/css/style.min.css',
            'app/css/style.min.css.map',
            'app/js/**/*.js',
            'app/fonts/**/*',
            'app/images/**/*',
        ],
        {
            base: 'app',
        },
    ).pipe(dest('dist'));
};

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.build = build;
exports.cleanDist = cleanDist;
exports.htmls = htmls;

exports.build = series(cleanDist, htmls, build);
exports.default = parallel(styles, scripts, browsersync, watching);
