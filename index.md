---
layout: home
author_profile: true
permalink: /
---

<section id="about">
  {% include sections/about.md %}
</section>

<section id="research">
  {% include sections/research.md %}
</section>

<section id="publications">
  <h2>Publications</h2>
  {% for pub in site.publications %}
    {% include archive-single.html %}
  {% endfor %}
</section>

<!-- <section id="teaching">
  {% include sections/teaching.md %}
</section> -->
