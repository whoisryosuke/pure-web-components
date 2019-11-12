import { newE2EPage } from '@stencil/core/testing';

describe('pure-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pure-menu></pure-menu>');

    const element = await page.find('pure-menu');
    expect(element).toHaveClass('hydrated');
  });
});
