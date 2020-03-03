---
title: "Update multiple attributes in vanilla JavaScript [Ditching jQuery: Part 1]"
date: "2020-03-03T00:00:00Z"
layout: post
description: "Let's be honest: if you're an oldschool JavaScript developer, you've probably spent a lot of time crutching hard on jQuery. I certainly have.

JavaScript is in a great place, and while jQuery still has its uses, we're in a great season of vanilla."
tags:
  - "work"
  - "javascript"
---

Let's be honest: if you're an oldschool JavaScript developer, you've probably spent a lot of time crutching hard on jQuery. I certainly have.

JavaScript is in a great place, and while jQuery still has its uses, we're in a great season of vanilla. One of my goals this year is to write as much non-jQuery JavaScript as possible. Over the next few posts I'll share a bit of what I've been writing for handling various requirements in JavaScript without using jQuery.

## Updating multiple attributes at once

Recently I was rewriting the JavaScript for ConvertKit's pricing page and found myself needing to update several attributes at once on a variety of elements. For the most part I could have just written something like:

```javascript
// Store the selector in a const
const mySelector = document.querySelector(".my-selector");

// For every attribute that needs to be updated,
// use setAttribute() to update it
mySelector.setAttribute("data-name", "my-new-name");
mySelector.setAttribute("href", "https://somenewdomain.local");
```

This felt far too verbose, especially if I needed to update multiple attributes at a time.

I ended up writing a simple helper function that ends up doing something pretty similar, but gives me more flexibility and the ability to write code that's a bit more DRY.

```javascript
const mySelector = document.querySelector(".my-selector");

// A new helper function that allows me to
// loop through the attributes provided in an object
const updateAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// Now we can run the function any time we
// want to update the attributes
updateAttributes(mySelector, {
  "data-name": "my-new-name",
  "href": "https://somenewdomain.local"
});
```

Now we can use the `updateAttributes` to write code that's a bit cleaner and doesn't require endless `setAttribute` lines. Pretty simple!

The execution time between these two examples is pretty negligent, 0.124755859375ms vs 0.111083984375ms, and it's not likely you'll have to update more than a few attributes at a time. If there were multiple elements that needed to have their attributes updated, however, you might see some growing performance disparity, another point for the handy function.