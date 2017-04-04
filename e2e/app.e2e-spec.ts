import { SadventurePage } from './app.po';

describe('sadventure App', function() {
  let page: SadventurePage;

  beforeEach(() => {
    page = new SadventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
