---
layout: full
homepage: true
disable_anchors: true
description: If mediocrity had a Jekyll theme...
---

A Jekyll theme inspired by Bootstrap's official documentation theme from a few years back. This theme started off by stealing all of Bootstrap Docs' CSS and being used in [mistic100's theme](https://github.com/mistic100/jekyll-bootstrap-doc). This theme has since be rewritten from scratch and remains solely inspired by the original design.

> I've never seen a more mediocre theme it actually hurts my insides.
>
> ~ _Anonymous_, 2020

This theme is designed for writing documentation websites instead of having large unmaintainable README files or several markdown files inside of a folder in a repository.

<div class="row">
<div class="col-lg-6" markdown="1">

## Installation
{:.mt-lg-0}

This theme is designed to work both as a Gem or as a remote theme, meaning we officially support GitHub Pages.

### Gem

Add this line to your Jekyll site's Gemfile:

```ruby
gem "jekyll-docs-theme"
```

And then enable and use the theme in your Jekyll site via its `_config.yml`.

```yaml
theme: jekyll-docs-theme
```

### GitHub Pages

And add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: allejo/jekyll-docs-theme@v{{ site.project.version }}
```

</div>
<div class="col-lg-6" markdown="1">

## Features
{:.mt-lg-0}

Despite being a mediocre theme, we've got a features that we're especially proud of and dedicate a lot of our time to making sure they work as expected.

### Graceful Degradation

This theme uses as little JavaScript as possible. All of our anchors and table of contents are generated at build time. Any features that rely on JavaScript have fallbacks for graceful degradation. It's how the web should be nowadays.

### Heavily Customizable

A lot of parts in these theme consist of empty Jekyll includes that are designed to be overridden by website owners. Inject your custom code easily to any part of the website!

### Dark Mode

We all know that dark mode makes you a better human. This theme supports a dark mode based on each user's preference.

</div>
</div>

