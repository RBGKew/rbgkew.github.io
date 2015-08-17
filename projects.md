---
layout: page
title: Projects
permalink: /projects/
published: true
---

<div class="vertical-tabs-container">
  <div class="vertical-tabs">
    {% for group in site.data.groups %}
    <a href="javascript:void(0)" id="{{ group.id }}-tab" class="js-vertical-tab vertical-tab" rel="{{ group.id }}">{{ group.title }}</a>
    {% endfor %}
  </div>

  <div class="vertical-tab-content-container">
    {% for group in site.data.groups %}
    <a href="" class="js-vertical-tab-accordion-heading vertical-tab-accordion-heading" rel="{{ group.id }}">{{ group.title }}</a>
    <div id="{{ group.id }}-content" class="js-vertical-tab-content vertical-tab-content">
      {% assign include-path = group.id | prepend: 'groups/' | append: '/projects.md' %}
      {% capture content %}{% include {{include-path}} %}{% endcapture %}
      {{ content | markdownify }}
    </div>
    {% endfor %}
  </div>
</div>
