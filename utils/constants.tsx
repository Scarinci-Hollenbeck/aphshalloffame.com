const baseUrl = 'https://res.cloudinary.com/deamre9fk/'

export const genCloudinaryUrl = (base: string, group: string) => {
  if (Boolean(base)) {
    return `${baseUrl}image/upload${base}${group}`
  }
  return `${baseUrl}${group}`
}
