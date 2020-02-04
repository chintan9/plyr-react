const { launch } = require("qawolf");
const selectors = require("../selectors/firstTest");

describe('firstTest', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://chintan9.github.io/plyr-react/" });
  });

  afterAll(() => browser.close());

  it('can scroll', async () => {
    await browser.scroll(selectors[0], { x: 0, y: 212 });
  });

  it('can click "Play" button', async () => {
    await browser.click(selectors[1]);
  });

  it('can click "Settings" button', async () => {
    await browser.click(selectors[2]);
  });

  it('can click "Speed Normal" button', async () => {
    await browser.click(selectors[3]);
  });

  it('can click "Settings" button', async () => {
    await browser.click(selectors[4]);
  });

  it('can click "Enter fullscreen" button', async () => {
    await browser.click(selectors[5]);
  });

  it('can click "Exit fullscreen" button', async () => {
    await browser.click(selectors[6]);
  });
});