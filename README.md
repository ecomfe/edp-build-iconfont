# edp-build-iconfont

> edp-build iconfont with fontmin, generate [iconfont](https://github.com/showcases/icon-fonts) from svgs.

## Usage

`edp-build-config.js`:

```
var IconProcessor = require('edp-build-iconfont');

exports.getProcessors = function () {

    var iconProcessor = new IconProcessor({
        files: 'src/svg/*.svg',             // svg path
        fontName: 'font-food',              // font name
        dest: 'src/font'                    // dest path
    });

    return {
        'iconfont': [iconProcessor]
    };

});
```

## Options

config `fmOptions` as [fontmin](https://github.com/ecomfe/fontmin) options

```
var iconProcessor = new IconProcessor({
    fmOptions: {
        adjust: {
            leftSideBearing: 0,
            rightSideBearing: 0,
            ajdustToEmBox: true,
            ajdustToEmPadding: 0
        },
        startCode: 0xe001
    }
});
```

## Related

- [edp-build-iconfont-demo](https://github.com/junmer/edp-build-iconfont-demo)
- [edp-build-fontmin](https://github.com/ecomfe/edp-build-fontmin)
- [fontmin](https://github.com/ecomfe/fontmin)

[![NPM](https://nodei.co/npm/edp-build-iconfont.png?downloads=true&stars=true)](https://nodei.co/npm/edp-build-iconfont/)
