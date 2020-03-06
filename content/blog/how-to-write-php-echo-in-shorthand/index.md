---
title: "How to write PHP echo in shorthand"
date: "2020-03-06T00:00:00Z"
layout: post
published: true
description: "Sometime last year I found myself getting annoyed with how we were using PHP's echo to inject a single string into our WordPress HTML. It felt far too verbose and cluttery. Fortunately, there's a neat solution."
tags:
  - "work"
  - "php"
  - "front-end"
  - "html"
  - "tips"
---

Sometime last year I found myself getting annoyed with how we were using `echo` to inject a string into our WordPress HTML. It felt far too verbose and cluttery. I'd stumble across stuff like:

```php
<?php 
  $myString = "This is the string!";
?>
<div>
  <?php echo $myString; ?>
</div>
```

There's nothing *truly* wrong with using `echo` this way, I just hated how it looked. I know, I know. That's not the best reason to do something, especially in development, but I wanted a better life.

Turns out that since PHP 5.4 there is a [shorthand included](https://www.php.net/manual/en/language.basic-syntax.phptags.php), and it looks like this:

```php
<?php 
  $myString = "This is the string!";
?>
<div>
  <?= $myString; ?>
</div>
```

There aren't any performance differences between the two from what I've been able to determine.

Of course, if you're handling all of your output in PHP itself, you can't run shorthand this way. It only works if you're echoing out a single variable.