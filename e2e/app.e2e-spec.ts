import { MeanTplPage } from './app.po';

describe('mean-tpl App', () => {
  let page: MeanTplPage;

  beforeEach(() => {
    page = new MeanTplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
