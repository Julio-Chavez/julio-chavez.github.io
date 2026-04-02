---
layout: default
author_profile: true
permalink: /
---

<!-- ABOUT SECTION -->
<section id="about" class="page-section">
  {% assign about = site.pages | where: "name", "about.md" | first %}
  {{ about.content | markdownify }}
</section>

<hr>

<!-- RESEARCH SECTION -->
<section id="research" class="page-section">
  {% assign research = site.pages | where: "name", "research.md" | first %}
  {{ research.content | markdownify }}
</section>

<hr>

<!-- PUBLICATIONS SECTION -->
<section id="publications" class="page-section">
  <h1>Publications</h1>
  {% assign pubs = site.pages | where: "name", "publications.md" | first %}
  {{ pubs.content | markdownify }}
</section>
