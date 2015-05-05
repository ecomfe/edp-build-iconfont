# edp-build-iconfont

> edp-build iconfont with fontmin

## Usage

`edp-build-config.js`:

```
var IconProcessor = require('edp-build-iconfont');

exports.getProcessors = function () {

    var iconProcessor = new IconProcessor({
        files: 'src/svg/*.svg',				// svg 文件
        fontName: 'font-food',			    // 字体名称
        dest: 'asset/font' 			        // 字体文件路径
    });

    return {
        'default': [iconProcessor]
    };

});
```

## Related

- [fontmin](https://github.com/ecomfe/fontmin)
- [edp-build-fontmin](https://github.com/ecomfe/edp-build-fontmin)

[![NPM](https://nodei.co/npm/edp-build-iconfont.png?downloads=true&stars=true)](https://nodei.co/npm/edp-build-iconfont/)
