const BASE_URL = 'https://res.cloudinary.com/deamre9fk/'
export const SITE_URL = 'https://www.aphshalloffame.com'
export const SITE_TITLE =
  'Asbury Park High School Distinguished Alumni Hall of Fame'

export const genCloudinaryUrl = (base: string, group: string) => {
  if (Boolean(base)) {
    return `${BASE_URL}image/upload${base}${group}`
  }
  return `${BASE_URL}${group}`
}
