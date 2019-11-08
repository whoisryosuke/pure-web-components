import { newE2EPage } from '@stencil/core/testing';

describe('pure-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pure-form></pure-form>');

    const element = await page.find('pure-form');
    expect(element).toHaveClass('hydrated');
  });
});
