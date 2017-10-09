import { AgentAssistPage } from './app.po';

describe('agent-assist App', () => {
  let page: AgentAssistPage;

  beforeEach(() => {
    page = new AgentAssistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
