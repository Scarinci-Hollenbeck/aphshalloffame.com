import Link from 'next/link'
import Image from 'next/image'
import { genCloudinaryUrl } from 'utils/constants'
import figStyles from 'styles/Figures.module.css'
import styles from 'styles/MemberGallery.module.css'

const MemberImage = ({ name, slug, inducted }) => {
  const imgBaseUrl = genCloudinaryUrl('/c_scale,h_191/');
  const imgExtension = `${slug}.webp`;
  
  return (
    <figure className={figStyles.memberFigure}>
      <Image
        src={`${imgBaseUrl}${imgExtension}`}
        width={153}
        height={191}
        alt={name}
        layout="fixed"
        priority={true}
      />
      <figcaption>
        <Link href={encodeURI(`/inductee/${slug}`)}>
          <a className={styles.imgLink}>
            <h4>{name}</h4>
            <p>{`Inducted ${inducted}`}</p>
          </a>
        </Link>
      </figcaption>
    </figure>
  )
}

export default MemberImage
