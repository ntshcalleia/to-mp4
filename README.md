# to-mp4

Simple way to convert any video to mp4 using ffmpeg. It compresses videos without affecting the quality too much.

```
npx to-mp4 video.mov
```

## Keep It Simple, Stupid

All this does is run the command:
```
ffmpeg -i video.mov -vcodec libx264 -crf 24 video.mp4
```

## Requirements

The only requirement is to have `ffmpeg` installed.
