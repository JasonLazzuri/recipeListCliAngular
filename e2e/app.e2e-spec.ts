import { CliRecipePage } from './app.po';

describe('cli-recipe App', () => {
  let page: CliRecipePage;

  beforeEach(() => {
    page = new CliRecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
