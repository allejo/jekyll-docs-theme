---
layout: page
title: Theme Colors
---

All color theming capabilities within this team can be configured via the `ui` field in your `_config.yml` file. From a technical perspective, the `site.ui` fields are converted into CSS "variables" (aka "custom properties") but these CSS variables are generated for us via SCSS; specifically the `-r`, `-g`, `-b`  variables that can later be used to calculate `rgba()` values.

## Default Configuration

```yaml
{% include jekyll-docs-theme/vendor/yamlify.html key="ui" value=site.ui indentCount=1 %}
```
