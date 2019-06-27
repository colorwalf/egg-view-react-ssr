'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.reactssr.name;
  });
  app.get('/render', app.controller.view.render);
  app.get('/renderClient', app.controller.view.renderClient);
  app.get('/renderReactClient', app.controller.view.renderReactClient);
  app.get('/renderAsset', app.controller.view.renderAsset);
  app.get('/renderReactAsset', app.controller.view.renderReactAsset);
  app.get('/error', app.controller.view.renderError);
  app.get('/renderMarkup', app.controller.view.renderMarkup);
};
