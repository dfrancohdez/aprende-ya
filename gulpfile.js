const { src, dest, watch,parallel } = require("gulp");//extrae la funcionalidad de gulp(carpeta de gulp)
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');
const cssnano=require('cssnano');//no tienen gulp porque funcionan con postcss//comprime codigo de css
const postcss=require('gulp-postcss');//hace algunas transformaciones
const sourcemaps=require('gulp-sourcemaps');
const autoprefixer=require('autoprefixer');//para soporte en otros navegadores


function css(done) {
    //src('src/scss/app.scss')//identificar el archivo SASS
    src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())//inicializa sourcemaps con su hoja de estilos
        .pipe(plumber())//no terminar con errores
        .pipe(sass())//compilarlo
        .pipe(postcss([autoprefixer(),cssnano()]))
        .pipe(sourcemaps.write('.'))//donde se guarda, en el mismo lugar//el navegador si lo entiende
        .pipe(dest("src/css"))//almacenarlo en el disco duro


    done();//callback que avisa a gulp cuando llegamos al final
}
function dev(done) {
    //watch('src/scss/app.scss', css);//cuando cambie esta hoja de estilos manda a llamar css
    watch('src/scss/**/*.scss', css)
    done();
}
exports.css = css;
exports.dev = dev;