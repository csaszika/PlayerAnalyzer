import { NgRXExamplePage } from './app.po';

describe('ng-rxexample App', () => {
  let page: NgRXExamplePage;

  beforeEach(() => {
    page = new NgRXExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
