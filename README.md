raspivid
========

node.js read stream for h.264 data from the raspberry PI camera module

## installation

```
$ npm install raspivid
```

## usage

```js
var raspivid = require('raspivid');
var fs = require('fs');

var file = fs.createWriteStream(__dirname + '/video.h264');
var video = raspivid();

video.pipe(file);
```

## options

the options object you pass are turned into the raspivid command line:

```
var video = raspivid({
	width:640,
	height:480
});
```

this would result in the following command:

```
$ raspivid --nopreview --width 640 --height 480 -o -
```

## full options

options that make sense to use with the read stream (i.e. non file based options):

```

Image parameter commands:

-w, --width     : Set image width <size>. Default 1920
-h, --height    : Set image height <size>. Default 1080
-b, --bitrate   : Set bitrate. Use bits per second (e.g. 10MBits/s would be -b 10000000)
-t, --timeout   : Time (in ms) to capture for. If not specified, set to 5s. Zero to disable
-fps, --framerate       : Specify the frames per second to record
-g, --intra     : Specify the intra refresh period (key frame rate/GoP size)
-pf, --profile  : Specify H264 profile to use for encoding
-ih, --inline   : Insert inline headers (SPS, PPS) to stream
-c, --circular  : Run encoded data through circular buffer until triggered then save

H264 Profile options :
baseline,main,high

Image parameter commands

-sh, --sharpness        : Set image sharpness (-100 to 100)
-co, --contrast : Set image contrast (-100 to 100)
-br, --brightness       : Set image brightness (0 to 100)
-sa, --saturation       : Set image saturation (-100 to 100)
-ISO, --ISO     : Set capture ISO
-vs, --vstab    : Turn on video stabilisation
-ev, --ev       : Set EV compensation
-ex, --exposure : Set exposure mode (see Notes)
-awb, --awb     : Set AWB mode (see Notes)
-ifx, --imxfx   : Set image effect (see Notes)
-cfx, --colfx   : Set colour effect (U:V)
-mm, --metering : Set metering mode (see Notes)
-rot, --rotation        : Set image rotation (0-359)
-hf, --hflip    : Set horizontal flip
-vf, --vflip    : Set vertical flip
-roi, --roi     : Set region of interest (x,y,w,d as normalised coordinates [0.0-1.0])
-ss, --shutter  : Set shutter speed in microseconds

Notes

Exposure mode options :
auto,night,nightpreview,backlight,spotlight,sports,snow,beach,verylong,fixedfps,antishake,fireworks

AWB mode options :
off,auto,sun,cloud,shade,tungsten,fluorescent,incandescent,flash,horizon

Image Effect mode options :
none,negative,solarise,sketch,denoise,emboss,oilpaint,hatch,gpen,pastel,watercolour,film,blur,saturation,colourswap,washedout,posterise,colourpoint,colourbalance,cartoon

Metering Mode options :
average,spot,backlit,matrix
```

## license

MIT