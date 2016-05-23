import { test } from 'qunit';
import moduleForAcceptance from 'personal-site/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | landing page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('h1.name').text(), 'Julian Feliciano');
    assert.equal(find('.subtitle').text(), 'Software Developer');
    // Attempt to check the href of an anchor tag
    assert.equal(find('.blog-btn').text(), 'Blog');
    assert.equal(find('.about-btn').text(), 'About');
    assert.equal(find('.case-studies-btn').text(), 'Case Studies');
  });
});
