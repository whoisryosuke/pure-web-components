import { newE2EPage } from '@stencil/core/testing';

describe('pure-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pure-table></pure-table>');

    const element = await page.find('pure-table');
    expect(element).toHaveClass('hydrated');
  });
});
