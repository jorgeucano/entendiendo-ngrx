import { FirstExamplePage } from './app.po';

describe('first-example App', () => {
  let page: FirstExamplePage;

  beforeEach(() => {
    page = new FirstExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
