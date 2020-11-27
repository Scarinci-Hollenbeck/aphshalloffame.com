/* eslint-disable import/prefer-default-export */
export function setThumbnail(imgLink, width) {
  if (imgLink === null) {
    return `https://via.placeholder.com/${width}`;
  }

  return `${imgLink.slice(0, 60)}/c_scale,w_${width}${imgLink.slice(
    60,
    imgLink.length,
  )}`;
}

export function setProfileImage(link, options) {
  if (link === null) {
    return 'https://via.placeholder.com/500';
  }

  return `${options}${link.slice(60, link.length)}`;
}

export const createMarkup = (content) => ({ __html: content });
