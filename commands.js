const {initUi} = require('./src/ui');
function initCypressMousePointerCommands() {
  // Inject CSS & JavaScript
  before(() => {
    initUi();
  });
}

initCypressMousePointerCommands();
