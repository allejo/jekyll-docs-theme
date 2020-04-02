---
layout: page
title: Front Matter
description: ~
---

This theme introduces special [front matter](https://jekyllrb.com/docs/front-matter/) options available in all pages to configure the behavior of said page.

## Setting a Homepage

In order to define a homepage for a website, set the `homepage` front matter variable to `true` on whichever **one** page you'd like as the homepage.

| Name       | Type    | Default |
|:-----------|:--------|:-------:|
| `homepage` | boolean |  false  |

## Configuring Heading Anchors

By default, all page content will automatically inject anchors next to each of the headers on a page. These anchors can be configured and disabled via front matter on a per page or per layout basis.

To achieve this on a per layout basis, you would need to create your own layout and extend the provided layouts in this theme and set the default front matter values there.

### Disabling Anchors

To disable the anchors from being injected in a page, use the boolean `disable_anchors` front matter option.

| Name              | Type    | Default |
|:------------------|:--------|:-------:|
| `disable_anchors` | boolean |  false  |

## Hiding a Page from the Menu

All pages will automatically be listed in the navigation bar at the top of the website; but not all pages belong there. To hide a page from the menu bar, use the `show_in_menu` boolean front matter option.

| Name           | Type    | Default |
|:---------------|:--------|:-------:|
| `show_in_menu` | boolean |  true   |
