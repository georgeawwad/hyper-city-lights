'use strict';
const backgroundColor = '#0a0a0a';
const foregroundColor = '#F8F8F0';

const colors = [
  backgroundColor,
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#F92672', // pink
  '#A6E22E', // green
  '#FFFFFF', // white
  '#49483E', // brown gray
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#F92672', // main directory
  '#F92672', // ls directory
  '#FFFFFF', // white
  foregroundColor
];

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
      .tab_active:before {
        border-bottom-color: #E6DB74 !important;
      }
    `
  })
);
