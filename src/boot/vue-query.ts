import { VueQueryPlugin } from '@tanstack/vue-query';
import { boot } from 'quasar/wrappers';

export default boot(async ({ app }) => {
  VueQueryPlugin.install(app, {
    // Configuraciones
  });
});
