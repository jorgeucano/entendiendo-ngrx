import { EntendiendoNGRXPage } from './app.po';

describe('entendiendo-ngrx App', () => {
  let page: EntendiendoNGRXPage;

  beforeEach(() => {
    page = new EntendiendoNGRXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
