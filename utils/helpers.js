/* eslint-disable import/prefer-default-export */
export function setThumbnail(imgLink) {
  if (imgLink === null) {
    return 'https://via.placeholder.com/120';
  }

  return `${imgLink.slice(0, 60)}/c_scale,w_120${imgLink.slice(
    60,
    imgLink.length,
  )}`;
}

export async function createUniqueArr(arr) {
  return arr.filter(
    (thing, index, self) => index === self.findIndex((t) => t.year === thing.year),
  );
}
