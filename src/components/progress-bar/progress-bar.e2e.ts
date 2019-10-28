import { newE2EPage } from '@stencil/core/testing';

describe('strc-progress-bar', () => {
  let element: HTMLStrcProgressBarElement;
  let page: any;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<strc-progress-bar />');
    element = await page.find('strc-progress-bar');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });
});
