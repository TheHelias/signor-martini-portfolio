const React = require('react')

// Runs synchronously before the app renders, so the correct theme is applied
// before first paint — prevents a flash of the wrong color scheme.
const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem('theme')
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', theme)
  } catch (e) {}
})()
`

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-init',
      dangerouslySetInnerHTML: { __html: themeInit }
    })
  ])
}
