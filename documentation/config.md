---
layout: page
title: Theme Configuration
---

This project can be configured to look and behave differently by toggling and setting options in your `_config.yml` file. All these options are optional and have defaults set in place if any of them are are not set.

## Project

The project object can be specified with information related to the software this; this information will appear on the homepage's jumbotron area.

```yaml
{% include jekyll-docs-theme/yamlify.html key="project" value=site.project indent_count=1 %}
```

| Field          | Description                         |
|:---------------|:------------------------------------|
| `version`      | The current version of the software |
| `download_url` | The URL to the current download     |

## Licenses

The license object accepts four fields regarding information about the licensing of your software and documentation.

```yaml
{% include jekyll-docs-theme/yamlify.html key="license" value=site.license indent_count=1 %}
```

| Field          | Description                                                       |
|:---------------|:------------------------------------------------------------------|
| `software`     | The license the software is distributed under                     |
| `software_url` | A URL to the license text for the license specified in `software` |
| `docs`         | The license this documentation is distributed under               |
| `docs_url`     | A URL to the license text for the license specified in `docs`     |

## Links

The links object has two subobjects, `header` and `footer`; both of these objects accept an array of elements with a `title` and `url`. The links defined in the `header` object will appear in the navigation of the website and the links in the `footer` will appear at the bottom of the website.

```yaml
{% include jekyll-docs-theme/yamlify.html key="links" value=site.links inden_cCount=1 %}
```

| Field   | Description                           |
|:--------|:--------------------------------------|
| `title` | The textual representation of the URL |
| `url`   | The URL of the link                   |

## UI

@TODO See dedicated page

## Analytics

```yaml
{% include jekyll-docs-theme/yamlify.html key="analytics" value=site.analytics indent_count=1 %}
```

| Field    | Description                                                                   |
|:---------|:------------------------------------------------------------------------------|
| `google` | The unique identifier for Google Analytics; typically looks like `U-123456-1` |

## Social

Options for configuring buttons to "like", "tweet" or "star" this site with the respective social media websites.

```yaml
{% include jekyll-docs-theme/yamlify.html key="social" value=site.social indent_count=1 %}
```
