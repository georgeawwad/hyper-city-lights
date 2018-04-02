'use strict'
const foregroundColor = '#b7c5d3'
const backgroundColor = '#1a2027'
const red = '#D95468'
const green = '#008B94'
const yellow = '#d98e48'
const blue = '#68A1F0'
const magenta = '#b62d65'
const cyan = '#33CED8'

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: '#333F4A',
    cursorColor: '#5ec4ff',
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: '#f1f1f0',
      lightBlack: '#686868',
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    },
    css: `
		${config.css}

		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		.tab_active:before {
			border-color: rgba(255, 106, 193, 0.25);
		}

		.terminal,
		.term_fit:not(.term_term) {
			opacity: 0.6;
		}

		.terminal.focus,
		.term_fit.term_active {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
			will-change: opacity;
		}

		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: rgba(255, 106, 193, 0.4);
			transform: scaleX(0);
		}

		.tab_first {
			border-left-color: transparent !important;
		}

		.tab_tab:not(.tab_active) {
			color: #666;
		}

		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0.0, 0.0, 0.2, 1);
		}
	`
  })
