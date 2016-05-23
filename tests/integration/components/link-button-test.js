import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-button', 'Integration | Component | link button', {
  integration: true
});

test('it renders', function(assert) {
  this.set('className', 'blog-btn');
  this.set('text', 'Blog');

  this.render(hbs`{{link-button className=className text=text}}`);

  assert.equal(this.$().text().trim(), 'Blog');
});
