<div id="publications">
  <h1>Publications</h1>
    <!-- <hr class="section-divider"> -->

  <ol class="pub-list">
    {% for p in site.data.publications %}
      <li class="pub-item">
        {{ p.authors }} ({{ p.year }}). {{ p.title }} <em>{{ p.journal }}</em>.
        
        {% if p.type == "preprint" %}
          <a href="{{ p.link }}" class="pub-link">[Preprint]</a>
        {% else %}
          <a href="{{ p.link }}" class="pub-link">[DOI]</a>
        {% endif %}
      </li>
    {% endfor %}
  </ol>
</div>
