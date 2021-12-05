import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { StarterComponent } from '../src/web-components/starter-component/starterComponent.component';
import '../src/index.js';

describe('StarterComponent', () => {
  let element: StarterComponent;
  beforeEach(async () => {
    element = await fixture(html`<starter-component></starter-component>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
