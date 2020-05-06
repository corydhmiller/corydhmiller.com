---
title: "How to write custom utility pseudo-classes in CSS"
date: "2020-03-05T00:00:00Z"
layout: post
published: true
description: "A while ago I was trying to figure out how to write my own pseudo-classes in CSS and couldn't figure out how to make it work, until I stumbled across this stupid easy trick to write remarkably clear utility classes."
tags:
  - "work"
  - "css"
  - "front-end"
  - "html"
---

Utility classes are my favorite way to design and code with CSS. I'm not here to argue their usefulness: check out my friend Sarah's <a href="https://frontstuff.io/in-defense-of-utility-first-css" target="_blank" rel="noopener">defense of utility-first CSS</a>.

Being able to quickly add a class that tells an element what to do at what breakpoint isn't anything new. We've seen versions of this before, with frameworks like Bootstrap having classes like `col-xs-12`, `hidden-sm`, and so on.

In both of these examples, there are specific media queries generated within the framework that change the properties of a class depending on the query. It's quite handy.

Making your own utility classes can be fun but finding a canonical way to write out class names has always been a nuisance for me. I wanted something a bit clearer.

I'd seen frameworks like <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind</a> use a really handy format for what they call pseudo-classes, but hadn't given it much thought in my own practice, until I wanted to make some responsive margin classes.

"Why not just use Tailwind?" Great question. Tailwind is really great, but I was interested in constructing my own, so I did. By all means, use Tailwind if your project calls for it!

It's really simple: **you escape a `:` character to make a class act like a psuedo class.**

```scss
.sm\:m-50 {
  @media screen and (min-width: 768px) {
    margin: 50px;
  }
}
```

```html
<p class="sm:m-50">
  This content will have a margin of 50px starting at 768px browser width.
</p>
```

Does it do anything really fancy? Not necessarily. It simply allows you greater customization (and fun!) in class naming conventions.

```scss
.hover\: {
  &bg-green {
    &:hover {
      background-color: green;
    }
  }
}
// <div class="hover:bg-green"></div>

.focus\: {
  &outline-none {
    &:focus {
      outline: none;
    }
  }
}
// <div class="focus:outline-none"></div>

.mobile\: {
  @media screen and (max-width: 479px) {
    &font-small {
      font-size: 14px;
    }
  }
}
.tablet\: {
  @media screen and (min-width: 480px) {
    &font-large {
      font-size: 18px;
    }
  }
}
// <p class="mobile:font-small tablet:font-large">Hi there!</p>
```

And so on. These aren't perfect examples, but it gives you an idea of the types of classes you can construct, all with a simple `\:`.

You could, of course, use a different methodology to write your classes, and that's totally fine. The point is to have a clear naming convention that helps you construct your pages as you write HTML.

I'm working on another article for building complex, responsive pseudo-classes using SASS loops and variables. See you in the next one!