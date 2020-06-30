---
title: "Smaller websites are not a luxury"
date: "2020-06-30T00:00:00Z"
layout: post
published: true
description: "Recently I decided to get back into blogging, which you probably figured out by visiting the site. It's a simple setup, but it does one thing really well: it stops me from overthinking."
tags:
  - "work"
  - "css"
  - "front-end"
  - "html"
---

I recently wrote a post on adding [responsive pseudo classes](/creating-complex-and-responsive-pseudo-classes-in-sass/), so I know this seems contradictory, but it's something I consider on a daily basis.

File bloat is a real thing. New libraries, new dependencies, third-party plugins, non-lazy images...before you know it, your site is a whopping 3MB and you don't know how.

Developers have tried to fix this problem by creating new frameworks and things like static-site generators (heck this site uses Gatsby). Yet we still manage to mess this up.

Reducing and optimizing page load is not a luxury, it's something I consider to be ethically responsible. When we require visitors to download resources, we are requiring data and electricity and a myriad of other things. We are requiring mobile users to use some of their data, some of which have data caps. We are telling servers that they need to serve out all of these resources no matter their size.

Marketers like to talk about page load because if a page takes too long to load, you're more likely to lose a sale or keep the visitor to view ads and whatnot. While this is certainly true, I don't care as much about that. I care more that I am directly responsible for the consumption of resources that I am requiring visitors to download.

One of my goals when developing new pages for ConvertKit is to do my best to _reduce_ overall code load requirements by the end of the project. This isn't always achievable, but it's a personal goal. It helps me keep my code in check and makes me ask questions like, "Could I do this more effectively?" and "Does code already exist elsewhere that I can repurpose for this?"

We have a responsibility to our visitors and to the world. We should be thinking about this with every character we type.