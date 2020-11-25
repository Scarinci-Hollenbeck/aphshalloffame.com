/* eslint-disable import/prefer-default-export */
export function setThumbnail(imgLink) {
  if (imgLink === null) {
    return 'https://via.placeholder.com/200'
  }

  function set200Width(link) {
    const sixtyToEndOfString = link.slice(60, link.length)
    return `/c_scale,w_200${sixtyToEndOfString}`
  }

  return set200Width(imgLink)
}
