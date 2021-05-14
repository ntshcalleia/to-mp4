# to-mp4

Quickly transcode videos to mp4 with an easy to remember command:
```
npx to-mp4 video.mov
```

Works with any file type, the only requirement is to have `ffmpeg` installed.

## How it works

This script will run the following command:

```
ffmpeg -i video.mov -vcodec libx264 -crf 20 video.mp4
```

The output is a compressed - but still high quality - mp4 video file. I've been using it for compressing screen recordings before uploading them to Slack and other platforms - just because `npx to-mp4` is a lot easier to remember than the full ffmpeg command.
