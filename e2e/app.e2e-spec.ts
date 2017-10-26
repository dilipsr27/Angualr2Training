import { AngluardemoPage } from './app.po';

describe('angluardemo App', () => {
  let page: AngluardemoPage;

  beforeEach(() => {
    page = new AngluardemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
