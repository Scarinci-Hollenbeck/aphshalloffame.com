export const genCloudinaryUrl = (base=null) => {  
  const url = 'https://res.cloudinary.com/deamre9fk/'
  const group = 'site/Members/'

  if(base) {
    return url + 'image/upload' + base + group;
  }
  return url + group;
}
  
