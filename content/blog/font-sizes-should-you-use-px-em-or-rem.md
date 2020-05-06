---
title: 'Font sizes: should you use px, em, or rem?'
date: "2020-04-09T00:00:00Z"
layout: post
published: false
description: "Recently I decided to get back into blogging, which you probably figured out by visiting the site. It's a simple setup, but it does one thing really well: it stops me from overthinking."
tags:
  - "work"
  - "css"
  - "front-end"
  - "html"
---

In what feels like an age old debate that has been written about over and over, I'm going to throw my hat in the ring and talk about `px`, `em`, `rem`, and why I use which ones where I use them.

## Let's talk about font sizes.

Browser default font sizes are typically 16px. I say typically because there might be some random Janky Town browser that has a default font size of 48 carrots or something, but in virtually all browsers the font size is 16px default.

Bootstrap takes this over by assigning a font-size of 18px to the html and body tags, so now if no font size is defined by an element, it goes up the ladder to the body and html elements, which declares that 18px is the size.

Historically, font sizes in this theme have been set to specific pixel sizes, such as 18px, 22px, etc. This may be good from pixel-perfection standpoint, but has some accessibility issues. I'm not going to go into it deeply in this comment. The main problem is that pixels are absolute units, versus relative units of em or rem.

As of this update, Bootstrap declarations for the body tag have been removed and the font-size for html has been set to 112.5%. This takes the browser default font-size (again, typically 16px) and sets it to 112.5% of that number. This way the default html font size is visually 18px.

We are using the rem unit below to both add correct scaling and give accessibility control back to the user. If the user wants to overwrite the html font size to be 22px because they have poor eyesite, the typography of the website should adjust to the user's preferences.

At its base, however, the units generated below are based on an 18px scale and match with the typography design system. In 99/100 cases, it will visually appear correct and match the designs. This simply opens up the capability for users to control their experience visually if they need to.

Why rem and not em?