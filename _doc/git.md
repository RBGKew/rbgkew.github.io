---
layout: page
title: Git
---

# Installation

At a minimum, you need the git system and command line tools. Installation instructions
are available [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Other useful things that can make your git-life easier:

* [Github Client](https://desktop.github.com/) - Github has it's own client. Useful if
  you are just using github. Available for Windows and Mac
* [Fugitive](https://github.com/tpope/vim-fugitive) - Really excellent git wrapper for vim
* [Tower](https://www.git-tower.com) - People seem to like Tower as a client. It does
  cost money and is Mac only, so your milage may vary
* [EGit](http://www.eclipse.org/egit/) - If you want to manage git through Eclipse

# Resources

* [TryGit](https://try.github.io/levels/1/challenges/1) - A neat in-browser intro to
  using git and Github. No need to install/configure anything
* [Cheat Sheet](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf) -
  Cheet sheet for common commands. Invaluable for getting familiar with git commands.
* [Pro Git](https://git-scm.com/book/en/v2) - Has everything you will ever need to know
  about git.

# Common configuration

## .gitconfig

The following `.gitconfig` is a good starting point. To use, download it, replace `<your
email>` and `<your name>` with what they say, and place in your home directory. It
defines some useful aliases and sets up some sensible defaults. Of particular note is
`[push] default = simple`. For reasons why this is important, see [this stack overflow
answer](http://stackoverflow.com/a/13148313/1058324).

<div data-gist-id="jiacona/2659ad2e290bda2fc6869f67b2d32b98" data-gist-hide-line-numbers="true"></div>

## .gitignore

You will quite often not want git to track everything in your git repo. The `.gitignore`
file can be used to ignore specific files, paths, or wildcard patterns. Any files that
match patterns in this file will be completely ignored by git.  This is an example that
probably does more than you need it to:

<div data-gist-id="octocat/9257657" data-gist-hide-line-numbers="true"></div>

## .bashrc

Setting up your terminal to display information about git when you are in a repo is
magical. Add the following to your `.bashrc` to get a prompt that tells you what branch
you are on and if there are un-commited changes.

<div data-gist-id="jiacona/1d0902a008a69fbdb34f47e35456ca30" data-gist-hide-line-numbers="true"></div>

# Integrations

## Read the Docs

Once your repo is
[connected](https://read-the-docs.readthedocs.io/en/latest/getting_started.html#import-your-docs)
to Read the Docs, you can just put `.md` files in a `docs/` folder at the root of your
repo. When you push changes to github, Read the Docs pulls them in and updates the
documentation automagically.

# Presentation

Intro to git [presentation](/presentations/git.html)
