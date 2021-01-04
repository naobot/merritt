import "./src/css/style.scss"
const React = require("react")

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.scrollTo(0, 0)
  return false
}