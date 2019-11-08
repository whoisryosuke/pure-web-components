import { newE2EPage } from '@stencil/core/testing';

describe('pure-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pure-grid></pure-grid>');

    const element = await page.find('pure-grid');
    expect(element).toHaveClass('hydrated');
  });
});
