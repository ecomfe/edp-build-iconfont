/**
 * @file edp-build iconfont
 * @author junmer
 */

/* eslint-env node */

var extend = require('extend');
var Fontmin = require('fontmin');
var path = require('path');

/**
 * iconfont 处理器
 *
 * @param  {processContext}   processContext 处理器上下文
 * @param  {Function} done           完成回调
 */
function iconfont(processContext, done) {

    var destDir = path.resolve(processContext.baseDir, this.dest);
    
    var options = extend({glyph: true}, this.fmOptions);

    var fontmin = new Fontmin()
        .src(this.files, {base: processContext.baseDir})
        .use(Fontmin.svgs2ttf(this.fontName, options))
        .use(Fontmin.ttf2eot(options))
        .use(Fontmin.ttf2woff(options))
        .use(Fontmin.ttf2svg(options))
        .use(Fontmin.css(options))
        .dest(destDir);

    var me = this;

    fontmin.run(function (err, files, stream) {
        if (err) {
            me.log.error(err);
        }

        done();
    });
}

/**
 * iconProcessor 默认配置
 *
 * @type {Object}
 */
var iconProcessor = {
    files: ['*.svg'],
    fontName: 'iconfont',
    dest: 'font',
    name: 'IconProcessor',
    start: iconfont
};

/**
 * IconProcessor 构造函数
 *
 * @param {Object} opt 配置
 * @param {Array} opt.files svg 文件
 * @param {String} opt.fontName 字体名称
 * @param {Array} opt.dest 字体文件路径
 * @param {Object=} opt.fmOptions fontmin 配置
 * @return {Object} IconProcessor instance
 */
function IconProcessor(opt) {
    return extend({}, iconProcessor, opt);
}

module.exports = exports = IconProcessor;
