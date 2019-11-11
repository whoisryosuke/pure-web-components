import { newE2EPage } from '@stencil/core/testing';

describe('pure-base', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pure-base></pure-base>');

    const element = await page.find('pure-base');
    expect(element).toHaveClass('hydrated');
  });
});
