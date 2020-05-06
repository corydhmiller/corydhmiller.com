---
title: "How to fix background videos that won't autoplay"
date: "2020-03-14T00:00:00Z"
layout: post
published: true
description: "Yesterday I was attempting to add a silent autoplaying video to an element and kept running into issues where the video would sit on the first frame and wouldn't actually play the video."
tags:
  - "work"
  - "css"
  - "front-end"
  - "html"
---

Yesterday I was attempting to add a silent autoplaying video to an element and kept running into issues where the video would sit on the first frame and wouldn't actually play the video.

As far as I could tell, I was doing everything correctly.

```html
// Doesn't work
<video poster="image.jpg" autoplay playsinline loop>
  <source src="video.mp4" type="video/mp4">
</video>
```

All seemed correct, but why wasn't it playing when I loaded the page?

Turns out if the video element itself isn't muted, the video will not autoplay in most browsers.

```html
// Works!
<video poster="image.jpg" autoplay playsinline loop muted>
  <source src="video.mp4" type="video/mp4">
</video>
```

Problem solved! 

This definitely doesn't mean that it will _actually_ solve all of the problems, but in this case the result was exactly what I was looking for.