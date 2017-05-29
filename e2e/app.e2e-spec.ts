import { DiamondPage } from './app.po';

describe('diamond App', () => {
  let page: DiamondPage;

  beforeEach(() => {
    page = new DiamondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
