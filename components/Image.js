import Image from 'next/image'

export default function SiteImage({ source, alt, width, height }) {
  return <Image src={source} alt={alt} height={height} width={width} />
}
