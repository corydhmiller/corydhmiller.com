---
title: "Creating complex and responsive pseudo-classes in SASS"
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

TL;WR:

You can escape a `:` character to make a class act like a psuedo class:

```scss
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

## How I set up responsive pseudo-classes

Utility classes are my favorite way to design and code with CSS. I'm not here to argue their usefulness: check out my friend Sarah's <a href="https://frontstuff.io/in-defense-of-utility-first-css" target="_blank" rel="noopener">defense of utility-first CSS</a>.

Being able to quickly add a class that tells an element what to do at what breakpoint isn't anything new. We've seen versions of this before, with frameworks like Bootstrap having classes like `col-xs-12`, `hidden-sm`, and so on.

In both of these examples, there are specific media queries generated within the framework that change the properties of a class depending on the query. It's quite handy.

Making your own utility classes can be fun but finding a canonical way to write out class names has always been a nuisance.

I'd seen frameworks like [Tailwind CSS](https://tailwindcss.com/) use a really handy format for responsive utility classes, but hadn't given it much thought in my own practice, until I wanted to make some responsive margin classes.

"Why not just use Tailwind?" Great question. Tailwind is really great, but I was interested in constructing my own, so I did. By all means, use Tailwind if your project calls for it!

Let's get to it. I use SASS for all of my styling, so let's check out what this would look like in practice.

## Setting up the variables

First off I want to assemble what my classes would look like. I want utility classes for both `margin` and `padding`, and be able to add spacing on every side. I want the output to be fairly shorthand, so `m-20` or `pl-30` would be the end result.

```scss
$spacers: (
  "m": "margin",
  "p": "padding",
);

$sidesList: (
  "t": "top",
  "b": "bottom",
  "r": "right",
  "l": "left",
);

$spacingUnits: ("0", "20", "30");

$screenSizes: (
  "xs": "480",
  "sm": "768",
  "md": "980",
  "lg": "1200",
);
```

So here we have four arrays: `$spacers`, `$sidesList`, `$spacingUnits` and `$screenSizes`. The first two arrays have key value pairs that will be used in our SASS loops, the other two are list of the pixel units for the spacing and media queries, respectively.

Now we need to loop through the spacers. We want to loop through the array using the `@each` SASS method and store the key value pair as `$spacerKey` and `$spacer`.

Secondly, we'll loop through each spacing unit so that we can apply those units.

```scss
// Loop through the spacers, in this case m and p
@each $spacerKey, $spacer in $spacers {
  // For each loop, run another loop through
  // the spacing units
  @each $num in $spacingUnits {
    // Our actual classes will start here
  }
}
```

Looking good so far. Now we're going to start building up the classes. Remember we've got a few new variables to work with here, namely `$spacerKey` (which will either be _m_ or _p_), \$num (from our `$spacingUnits` array), and finally `$spacer`, which is the actual value of the key/value pair from `$spacers`.

It might look confusing. I'll show you how it turns out.

```scss
@each $spacerKey, $spacer in $spacers {
  @each $num in $spacingUnits {
    /** 
    For each spacerkey, such as m or p,
     create a class by opening it up with
     a . to denote the class. 
    */
    .#{$spacerKey} {
      /** 
      Now we want to use our $num variable
      and join it to the first part of the
      class with &
      */
      &-#{$num} {
        /** 
        Finally, we add the actual property
        to the class using $spacer and adding px
        to the end of the number.
      */
        #{$spacer}: #{$num}px;
      }
    }
  }
}
```

Okay okay, what are we doing here?

SASS allows us to drop in the content of variables by using `#{$variable}`, which is super handy.

Here's the CSS output of our compiled SASS code:

```scss
// SASS
@each $spacerKey, $spacer in $spacers {
  @each $num in $spacingUnits {
    .#{$spacerKey} {
      &-#{$num} {
        #{$spacer}: #{$num}px;
      }
    }
  }
}

// CSS OUTPUT
.m-0 {
  margin: 0px;
}

.m-20 {
  margin: 20px;
}

.m-30 {
  margin: 30px;
}

.p-0 {
  padding: 0px;
}

.p-20 {
  padding: 20px;
}

.p-30 {
  padding: 30px;
}
```

Pretty neat, huh? Now all I have to do is drop the `p-30` class onto any HTML element and I immediately get a padding of 30 pixels.

## One step deeper: spacing for the sides

Of course, we don't want to stop there. We want classes like `mr-30` and `pt-20` for more fine tuned control over spacing.

You know what that means: another loop.

```scss
@each $spacerKey, $spacer in $spacers {
  @each $num in $spacingUnits {
    .#{$spacerKey} {
      &-#{$num} {
        #{$spacer}: #{$num}px;
      }
      /** 
      We start by looping through $sidesList
      like we did with the $spacers array
      */
      @each $sideKey, $side in $sidesList {
        /**
        Now we use the side key, which will end up
        being t, b, r, and l, for the next
        part of the class. It will end up
        like mr, pl, mb, and so on.
        */
        &#{$sideKey} {
          /**
          Now we just take our formula in the previous
          loop we did and add $side as a second "argument".
          */
          &-#{$num} {
            #{$spacer}-#{$side}: #{$num}px;
          }
        }
      }
    }
  }
}
```

Whew. Did you make it through?

I hope so, because the output is fantastic.

```scss
// SASS
@each $spacerKey, $spacer in $spacers {
  @each $num in $spacingUnits {
    .#{$spacerKey} {
      &-#{$num} {
        #{$spacer}: #{$num}px;
      }
      @each $sideKey, $side in $sidesList {
        &#{$sideKey} {
          &-#{$num} {
            #{$spacer}-#{$side}: #{$num}px;
          }
        }
      }
    }
  }
}

// CSS OUTPUT

.m-0 {
  margin: 0px;
}
.mt-0 {
  margin-top: 0px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mr-0 {
  margin-right: 0px;
}
.ml-0 {
  margin-left: 0px;
}
.m-20 {
  margin: 20px;
}
.mt-20 {
  margin-top: 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mr-20 {
  margin-right: 20px;
}
.ml-20 {
  margin-left: 20px;
}
// ...etc etc.
```

You might be asking what the practicality of having these utility classes is.

It allows for rapid prototyping and page building. I need to create an element with certain margins and padding without adding another specific class? Add a utility class.

```html
<div class="mt-20 mb-30 pr-20 pl-30 pt-20 pb-0">Hey there!</div>
```

I know exactly what this element is doing and I don't have to make anything else.

It might seem _far_ too verbose to be generating all of these classes, but when you realize that you have hundreds of classes with margin and padding properties, you can just drop in these utility classes and keep rolling along without having to add the same properties in the code.

## Okay okay, but what about responsive classes?

What if we want to start at zero margin then at "mobile" screen size we want to add `margin: 20px`?

This is really where it starts to get complicated.

```scss
@each $spacerKey, $spacer in $spacers {
  @each $num in $spacingUnits {
    .#{$spacerKey} {
      &-#{$num} {
        #{$spacer}: #{$num}px;
      }

      @each $sideKey, $side in $sidesList {
        &#{$sideKey} {
          &-#{$num} {
            #{$spacer}-#{$side}: #{$num}px;
          }
        }
      }
    }

    // Now we're going to do the same thing 
    // but add in our responsive breakpoints
    @each $sizeKey, $sizeVal in $screenSizes {
      // This is taking the key, i.e. "xs" or "sm" 
      // and injecting it as a string.
      .#{$sizeKey} {
        &\:#{$spacerKey} {
          &-#{$num} {
            /* This is basically the same as the above, 
            but now we're adding in a media query that 
            accepts in a min-width of the value we 
            specified in the $screenSizes array. 
            Now we'll only see this spacing happen on 
            screen sizes starting at what is defined. */
            @media screen and (min-width: #{$sizeVal}px) {
              #{$spacer}: #{$num}px;
            }
          }
        }
      }
    }
  }
}
```

It's a lot, I know, but now we can use something like `m-0 xs:m-20 lg:m-30` to specify what sort of margin we want at whatever breakpoints we have specified.

There's another piece of code we'd need to write to get classes such as `ml-0 sm:mr-20` if you wanted to:

```scss
@each $sizeKey, $sizeVal in $screenSizes {
  .#{$sizeKey} {
    &\:#{$spacerKey} {
      &-#{$num} {
        @media screen and (min-width: #{$sizeVal}px) {
          #{$spacer}: #{$num}px;
        }
      }
      // Bit more complicated to get the sides
      @each $sideKey, $side in $sidesList {
        &#{$sideKey} {
          &-#{$num} {
            @media screen and (min-width: #{$sizeVal}px) {
              #{$spacer}-#{$side}: #{$num}px;
            }
          }
        }
      }
    }
  }
}
```

And that's "it"!

## Is this overkill?

If you have a fairly small project, you could _easily_ add a few classes that apply just to your project and not worry about this sort of thing at all. In fact, if you _are_ working with a small project, I would recommend _against_ something as robust as what I've just written out.

However in projects like the ones I'm working on, we use these classes _constantly_ across hundreds of pages. By abstracting out common spacing classes like this, I prevent the need to write additional margin or padding properties to specific elements. It may seem like a lot of CSS is generated here, but as long as we're only adding what we need and then using it across our site effetively, we'll be saving both time and KB in the long run.

It also allows for super fast prototyping as I convert designs into code. Our designer Charli told me today: "your utility classes are SO GREAT Cory! I'm poking around at elements on other pages where I know I designed a similar pattern and learning from how you've set them up! Have barely written any CSS so far!"

This is what we're aiming for on our large site project. Faster development, less code bloat, and effectively using SASS to keep us in check.