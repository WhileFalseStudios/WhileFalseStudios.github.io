---
layout: wfs-new
title: Blog
description: While False Studios Blog
permalink: /blog/index.html
---
# Blog

This page is a listing of all blog posts made to the site. Searching is probably best if you want to find something specific.

{% for cat in site.categories %}
<h2>{{ cat | first }}</h2>
{% for posts in cat %}
{% for post in posts %}
{% if post.url %}
<h3>{{ post.title }} ({{post.displaydate}})</h3>
<a href="{{ post.url }}">Permalink</a>
{{post.excerpt}}
{% endif %}
{% endfor %}
{% endfor %}

{% endfor %}