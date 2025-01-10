import { type TaskFunction, series, parallel, src, dest } from 'gulp';
import gulpSass from 'gulp-sass'
import path from 'path';
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import { Transform } from 'stream';
import postcss from 'postcss'
import cssnano from 'cssnano'
import type Vinly from 'vinyl'
import consola from 'consola'
import chalk from 'chalk'


// 静态目录
const distFolder = path.resolve(__dirname, 'dist')

/**
 * c利用 postcss 和 cssnano 压缩
 * @returns
 */

const compressWithCssnano = () => {
  const processor = postcss(
    [
      cssnano({
        preset: [
          'default',
          {
            // 避免颜色转换
            colormin: false,
            // 避免字体转换
            minifyFontValues: false
          }
        ]
  
      })
    ]
  )
  return new Transform({
    objectMode: true,
    transform(chunk, _encoding, callback) {
      const file = chunk as Vinly
      if (file.isNull()) {
        callback(null, file)
        return
      }
      if (file.isStream()) {
        callback(new Error('Streaming not supported'))
        return
      }
      const cssString = file.contents!.toString()
      processor.process(cssString, { from: file.path }).then((result) => {
        const name = path.basename(file.path)
        file.contents = Buffer.from(result.css)
        consola.success(
          `${chalk.cyan(name)}: ${chalk.yellow(
            cssString.length / 1000
          )} KB -> ${chalk.green(result.css.length / 1000)} KB`
        )
        callback(null, file)
      })
    }
  })
}

const copyThemeChalkSource = () => {
  
}
const buildThemeChalk = () => {
  
}
const buildDarkCssVars = () => {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, 'src/dark/css-vars.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(compressWithCssnano())
    .pipe(dest(`${distFolder}/dark`))
  
}
const copyThemeChalkBundle = () => {
  
}
export const build: TaskFunction = parallel(
  // copyThemeChalkSource,
  series(
    // buildThemeChalk,
    buildDarkCssVars,
    // copyThemeChalkBundle
  )
);
export default build;