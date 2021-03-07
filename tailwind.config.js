/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        fontFamily: {
            body: 'tenon',
        },
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            'xl2': '1680px',
            'xl3': '1920px'
        },
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            },
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1280px"
            }
        },
        extend: {
            colors: {
                darkGray: '#222',
            },
            backgroundColor: {
                darkGray: '#222'
            },
            maxWidth: {
                icon: '60px',
            }
        }
    },
    variants: {
        margin: ['responsive', 'hover', 'focus'],
        maxWidth: {
            '100': '100px'
        },
        opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        visibility: ['responsive', 'hover', 'focus', 'group-hover'],
        rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
    plugins: [
        plugin(function ({
            addBase,
            config
        }) {
            addBase({
                'body': {
                    backgroundColor: '#222',
                    color: '#fff',
                    fontFamily: config('theme.fontFamily.body'),
                    fontWeight: '400',
                    fontSize: '1rem'
                },
                'p': {
                    marginBottom: '1.5rem',
                    lineHeight: '1.75'
                },
                'h1': {
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    '@screen md': {
                        fontSize: '2.5rem'
                    }
                },
                'h2': {
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    '@screen md': {
                        fontSize: '2rem'
                    },
                    '@screen lg': {
                        fontSize: '2.25rem'
                    }
                },
                'h3': {
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    '@screen md': {
                        fontSize: '1.75rem'
                    },
                    '@screen lg': {
                        fontSize: '2.25rem'
                    }
                },
                'h4': {
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    '@screen md': {
                        fontSize: '1.5rem'
                    },
                    '@screen lg': {
                        fontSize: '2rem'
                    }
                },
                'h5': {
                    fontWeight: '700',
                    fontSize: '1rem',
                    '@screen md': {
                        fontSize: '1.25rem'
                    },
                    '@screen lg': {
                        fontSize: '1.5rem'
                    }
                },
                'h6': {
                    fontWeight: '700',
                    fontSize: '0.875rem',
                    '@screen md': {
                        fontSize: '0.975rem'
                    },
                    '@screen lg': {
                        fontSize: '1.15rem'
                    }
                },
            })
        })
    ]
}