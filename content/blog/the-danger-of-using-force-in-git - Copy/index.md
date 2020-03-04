---
title: "The danger of using --force in git"
date: "2020-02-28T00:00:00Z"
layout: post
description: "Yesterday I had one of those days when my life seemed to flash before my eyes. I was staring at my branch's logs, wondering why all of the previous day's work was nowhere to be found."
tags:
  - "git"
  - "work"
---


Yesterday I had one of those days when my life seemed to flash before my eyes. I was staring at my branch's logs, wondering why all of the previous day's work was nowhere to be found.

I started to panic, running `git log` and `git reflog` but for the life of me I couldn't figure out why nothing had been saved. I was *sure* I had saved my work and committed it, so why now was I looking at my code in the state it was two days prior?

I had made several errors before coming to this realization, and the culmination of these mistakes led to a lot of important work being lost.

Here are a few tips on how to prevent simple mistakes like the ones I made.

### Don't do complicated work when you're tired.

To be honest, I don't really know what I was thinking for most of yesterday. I had slept quite poorly the previous night and thought I could just power through. 

Powering through might be possible some days, but when your brain is tired you are more likely to make mistakes, and mistakes can cost.

Take some time and get your head clear throughout your day. Take frequent breaks and step away from the computer so you can come back to your code with a clear head. If possible, take a power nap or two.

Most importantly, protect your sleep and rest times, because it's more than just getting X amount of hours at night. Tiredness has the capability to really trash your work.

### Make a process and stick to it.

I confess I was sloppy with my commands. I had recently purchased a new laptop so I'd been in the process of getting it all set up with apps and 1Password and SSH keys and everything in between. Part of that included getting synced with our repos on GitHub.

I still don't know exactly which set of commands I used to sync that day's work with the online repo, but that's actually the crux of the issue. The fact that I don't remember if I `git pull`'d or `git push`'d or even checked which branch had the latest version of the code is really where I went wrong.

Because I didn't have a process written down, I just sort of made it happen. I figured I knew what I was doing, so why bother with the complicated checks?

We bother with checking ourselves because we're human and we make mistakes.

Even if I had something as simple as a process for "What to do when you `git pull` and there's a discrepancy" or "When your local repo is behind and ahead of the origin repo", it could have saved me some real headache.

In any case, I slapped around some commands and figured it would be okay. It wasn't.

Dialing in processes and writing them down can help to prevent occurence (and reoccurrence) of problems.

### Don't use `--force` unless there is literally no other option.

...and then still look for another option.

Then there's this part of the story that I'm truthfully deeply embarrassed about. At one point I was 100% confident that my local copy of the branch was most up to date, so when there was one of those `your branch is 5 commits ahead and 6 behind` messages, I figured I could just bypass the issue by forcing my local history to the remote repo.

So I ran `git push --force`.

Lo and behold, it did exactly what I had told it to do and overwrote the history on the remote branch.

This was early on in the day, and I didn't think much of it as I went about other tasks. That is, until I sat down to work on my branch and found all of my work missing.

To be fair, I don't know *why* my local branch wasn't on the latest code. I had absolutely saved and committed the work, so I am still perplexed, but in either case, there was something huge about what I did that made all the difference.

**When `git` gives you warnings, it's probably your fault.**

I wanted the shortcut rather than putting in just a few extra minutes to check the branches and logs, see where the discrepancy was, and if *anything* make a quick branch copy just in case.

Shortcuts in the processes of development can help save time but they can also lead to serious mistakes. Stick with the process, do it right, and save yourself some headache.

## And yet somehow I got my code back.

There's a happy ending to this madness. We run our code through a continuous integration and testing suite before it gets deployed, so after I had died a thousand deaths over the span of about 20 minutes I thought to check there to see if I had truly committed and pushed my updates the previous day.

Thankfully, I had! GitHub has a great thing I didn't know about where it saves every commit that is pushed, even if that history has been overwritten. At least, that's how it seems it works, someone can fact check me on that. Either way, even though the commit wasn't in the branch history, I was still able to access it and get my code back, saving me another day or two of work.

I don't want to count on miracles like this, so I'm sticking with the process from hereon out and working to make *new* mistakes instead of repeating old ones.

And I need to automate some sort of macro on my computer that deletes `--force` every time I type it.