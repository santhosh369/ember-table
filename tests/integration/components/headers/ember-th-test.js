import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// import { Header as EmberTableHeaderCellPage } from 'ember-table/test-support/pages/-private/ember-table-header';

// const th = new EmberTableHeaderCellPage();

moduleForComponent('ember-th', '[Unit] ember-th', { integration: true });

test('A header cell accepts a block', async function(assert) {
  assert.expect(1);

  // this.set('api', {
  //   columnMeta: {}
  // });

  // await this.render(hbs`
  //   {{#ember-th api=api}}
  //     <div class='yielded'>My content</div>
  //   {{/ember-th}}
  // `);
  assert.ok(true, 'TO BE FINISHED');
});
