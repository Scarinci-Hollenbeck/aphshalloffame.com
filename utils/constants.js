const baseUrl = 'https://res.cloudinary.com/deamre9fk/'

export const genCloudinaryUrl = (base=null, group) => {  
  if(base) {
    return baseUrl + 'image/upload' + base + group;
  }
  return baseUrl + group;
}


  
