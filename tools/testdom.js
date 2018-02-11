const TestDom = (markup) => {
  if(typeof document !== 'undefined') return;
  let jsdom = require('jsdom').jsdom;
  global.document = jsdom(markup || '');
  global.window = document.parentWindow;
  global.navigator = {
    userAgent: 'node.js'
  };
};
