const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  daisyui: {
    themes: ['night'],
  },
  plugins: [require('daisyui'), addDynamicIconSelectors()],
};
