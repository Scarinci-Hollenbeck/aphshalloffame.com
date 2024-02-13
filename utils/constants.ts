const BASE_URL = 'https://res.cloudinary.com/deamre9fk/'
export const SITE_URL = 'https://www.aphshalloffame.com'
export const SITE_TITLE =
  'Asbury Park High School Distinguished Alumni Hall of Fame'
export const DONATE_SUB_TITLE =
  'Help impact the lives of future hall of famers by donating now'
export const DONATE_TITLE = 'Donate'
export const CONTACT_SUB_TITLE = 'To get in touch'
export const CONTACT_TITLE = 'Contact'
export const CONTACT_MESSAGE = 'Contact one of our members'
export const BIO_NOMINATION_TITLE = 'Bio Nomination'

export const genCloudinaryUrl = (base: string, group: string) => {
  if (Boolean(base)) {
    return `${BASE_URL}image/upload${base}${group}`
  }
  return `${BASE_URL}${group}`
}
