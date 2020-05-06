---
title: "Adding content to pseudo elements without extra code"
date: "2020-05-06T00:00:00Z"
layout: post
published: true
description: "There is a very simple way to maintain DRY code with psuedo elements, specifically with the content of those elements. You don't have to make new classes: just use attr()."
tags:
  - "work"
---

Randomly today I was working with psuedo elements (`:before`, `:after`, etc), and I came across a tiny little CSS property that for some reason had been fully unknown to me before.

The problem: I needed to have multiple psuedo elements but with different content.

Originally I had something that looked something similar to this mess:

```scss
// You can see that it starts to get really messy really fast
.element {
  &:before {
    position: absolute;
    top: 0;
    left: 0;
  }
  &-1 {
    &:before {
      content: "1";
    }
  }
  &-2 {
    &:before {
      content: "2";
    }
  }
  &-3 {
    &:before {
      content: "3";
    }
  }
}
```

```html
<div class="element element-1"></div>
<div class="element element-2"></div>
<div class="element element-3"></div>
```

So in this case, I'm creating multiple elements just to add new content into the psuedo class. It's messy and gross and doesn't scale well at all. What if in a future project we needed to add 8 more elements with different content? Gross.

Fortunately, that's where `attr()` can help ([read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)).

`attr()` is a CSS function that returns a string and is accessible by that particular element.

Check this out:

```scss
// You can see that it starts to get really messy really fast
.element {
  &:before {
    content: attr(data-number);
    position: absolute;
    top: 0;
    left: 0;
  }
}
```

```html
<div class="element" data-number="1"></div>
<div class="element" data-number="2"></div>
<div class="element" data-number="3"></div>
```

Effectively this produces the _exact_ same result but with _much_ less code and obfustication. Just make sure that you're passing in a string that matches an accepted value, and you're golden.

You could do this with any other number of CSS properties, as long as the end result is clearer code that helps your project.

For the most part I'm only using `attr()` for these types of psuedo elements, but it really adds a neat level of abstraction that allows you to create building blocks with your HTML. It's really powerful, I recommend checking out the documentation for the function and seeing how you can utilize it in your projects.