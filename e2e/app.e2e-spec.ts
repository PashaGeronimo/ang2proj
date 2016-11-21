import { AngFinPage } from './app.po';

describe('ang-fin App', function() {
  let page: AngFinPage;

  beforeEach(() => {
    page = new AngFinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
