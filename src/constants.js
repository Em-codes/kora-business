export const COLORS = {
	lightOrange: '#ff6c02',
	veryLightOrange:'#fff0e2',
	darkBlue: {
		100: '#040470',
		200:'#3232A0',
		300: '#1e266d',
	},
	grey: {
		100: '#f9f9f9',
		300: '#515867',
	},
	white: '#fff',
	black: '#000'
};

export const FONT_WEIGHTS = {
	regular: 400,
	semiBold: 600,
	bold: 700,
	extraBold:800
};

export const FONT_SIZES = {
	xxs: '0.75rem', //12px
	nuetta:'0.9rem',//custom
	xs: '1rem', //16px
	s: '1.125rem', //18px
	m: '1.5rem', //24px
	l: '2rem', //32px
	xl: '2.5rem', //40px
	xxl: '3rem', //48px
	xxxl: '4.5rem', //72px
};

// Media queries
export const BREAKPOINT_SIZES = {
	mobileSmall: 320,
	mobile: 540,
	tablet: 768,
	laptop: 1024,
	desktop: 1200,
	desktopLarge: 1380,
};

export const BREAKPOINTS = {
	mobileSmall: `(max-width: ${BREAKPOINT_SIZES.mobileSmall}px)`,
	mobile: `(max-width: ${BREAKPOINT_SIZES.mobile}px)`,
	tablet: `(max-width: ${BREAKPOINT_SIZES.tablet}px)`,
	laptop: `(max-width: ${BREAKPOINT_SIZES.laptop}px)`,
	desktop: `(max-width: ${BREAKPOINT_SIZES.desktop}px)`,
	desktopLarge: `(max-width: ${BREAKPOINT_SIZES.desktopLarge}px)`,
};