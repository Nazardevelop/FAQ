import { FaqappPage } from './app.po';

describe('faqapp App', () => {
  let page: FaqappPage;

  beforeEach(() => {
    page = new FaqappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
