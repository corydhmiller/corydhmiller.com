---
title: "Responsive \"pseudo\" utility classes in CSS"
date: "2020-03-04T00:00:00Z"
layout: post
description: "Recently I decided to get back into blogging, which you probably figured out by visiting the site. It's a simple setup, but it does one thing really well: it stops me from overthinking."
tags:
  - "work"
  - "css"
  - "front-end"
  - "html"
---

TL;WR:

You can escape a `:` character to make a class act like a psuedo class:

```css
.sm\:m-50 {
  @media screen and (min-width: 768px) {
    margin: 50px;
  }
}
```

```html
<p class="sm:m-50">
  This content will have a margin of 50px 
  starting at 768px browser width.
</p>
```

## How I set up responsive pseudo utility classes

Utility classes are my favorite way to design and code with CSS. I'm not here to argue their usefulness: check out my friend Sarah's <a href="https://frontstuff.io/in-defense-of-utility-first-css" target="_blank" rel="noopener">defense of utility-first CSS</a>.

Being able to quickly add a class that tells an element what to do at what breakpoint isn't anything new. We've seen versions of this before, with frameworks like Bootstrap having classes like `col-xs-12`, `hidden-sm`, and so on.

In both of these examples, there are specific media queries generated within the framework that change the properties of a class depending on the query. It's quite handy.

Making your own utility classes can be fun but finding a canonical way to write out class names has always been a nuisance.

I'd seen frameworks like [Tailwind CSS](https://tailwindcss.com/) use a really handy format for responsive utility classes, but hadn't given it much thought in my own practice, until I wanted to make some responsive margin classes.

I use SASS for all of my styling, so let's check out what this would look like.

## Setting up the variables

First off I want to assemble what my classes would look like, 

```sass
$spacers: (
  "m": "margin",
  "p": "padding"
);

$sides-list: (
  "t": "top",
  "b": "bottom",
  "r": "right",
  "l": "left"
);

$spacing-list: ("0", "20", "30");
```

So here we have three arrays: `$spacers`, `$sides-list` and `$spacing-list`. 


```sass
@each $spacerKey, $spacer in $spacers {
  @each $num in $spacing-list {
    .#{$spacerKey} {
      &-#{$num} {
        #{$spacer}: #{$num}px;
      }

      @each $sideKey, $side in $sides-list {
        &#{$sideKey} {
          &-#{$num} {
            #{$spacer}-#{$side}: #{$num}px;
          }
        }
      }
    }

    @each $sizeKey, $sizeVal in $responsive-size-list {
      .#{$sizeKey} {
        &\:#{$spacerKey} {
          &-#{$num} {
            @include screen($sizeKey, min) {
              #{$spacer}: #{$num}px;
            }
          }

          @each $sideKey, $side in $sides-list {
            &#{$sideKey} {
              &-#{$num} {
                @include screen($sizeKey, min) {
                  #{$spacer}-#{$side}: #{$num}px;
                }
              }
            }
          }
        }
      }
    }
  }
}
```