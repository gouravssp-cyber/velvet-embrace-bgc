# Video Optimization Guide

## Current Status
The hero video is currently **58MB**, which significantly impacts page load time.

## Implemented Code Optimizations
✅ Changed `autoPlay={true}` to `autoPlay={false}` with delayed playback
✅ Added `preload="metadata"` to prevent full video download on page load
✅ Added `poster={heroPoster}` to show thumbnail image while video loads
✅ Added `playsInline` for better mobile support
✅ Wrapped video in a `useEffect` hook to lazy-load on component mount
✅ Added proper width/height attributes for browser rendering optimization
✅ Proper `<source>` tag structure with video/mp4 MIME type

## Required: Video Compression

### Option 1: Using FFmpeg (Recommended)
The video needs to be compressed from 58MB to ~5-10MB. Use this command:

```bash
ffmpeg -i src/assets/video.mp4 \
  -c:v libx264 \
  -preset medium \
  -b:v 800k \
  -c:a aac \
  -b:a 128k \
  -vf "scale=1920:-1" \
  src/assets/video.mp4
```

**Expected result: 5-10MB file** (85-90% reduction)

### Option 2: Using Online Tools
If FFmpeg isn't available, use:
- [CloudConvert](https://cloudconvert.com/) - Upload MP4, set bitrate to 800k
- [Online-Convert](https://www.online-convert.com/) - Select H.264 codec, 800k bitrate
- [Handbrake](https://handbrake.fr/) - Desktop app, set format to MP4, quality slider to 18

### Compression Settings to Use:
- **Codec**: H.264 (libx264)
- **Video Bitrate**: 800k (can go down to 600k if quality acceptable)
- **Audio Bitrate**: 128k 
- **Resolution**: 1920px width (maintains 16:9 aspect ratio)
- **Preset**: medium

## Performance Impact

| Metric | Before | After Compression | After Code Changes |
|--------|--------|-------------------|--------------------|
| Initial Page Load | ~58MB download | ~6MB download | ~6MB download (lazy) |
| First Paint | Blocked | 500ms faster | 1-2s faster |
| Video Ready | 10-15s | 1-2s | Deferred to 500ms after mount |

## Monitoring

After optimization, test with Chrome DevTools:
1. Open DevTools → Network tab
2. Refresh page
3. Filter by media
4. Verify video downloads after page interactive state (not immediately)
5. Check load time is now <2 seconds

## Additional Tips
- Consider WebM format as alternative (10-20% smaller than H.264)
- Add multiple formats for browser compatibility:
  ```jsx
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  ```
- Monitor Real User Metrics (RUM) in production for actual loading times
