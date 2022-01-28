/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Button from 'react-bootstrap/Button'
import styles from 'styles/MemberGallery.module.css'
import figStyles from 'styles/Figures.module.css'
import LoadingError from '../LoadingError'
import LoadingSpinner from '../LoadingSpinner'

const MemberGrid = () => {
  const [year, setYear] = useState('2021')
  const router = useRouter()

  const { data: members, error: memberErr } = useSWR(
    `/api/get-members-by-year/${year}`,
    (url) => fetch(url).then((r) => r.json())
  )

  const { data: years, error: yearsErr } = useSWR('/api/get-years', (url) =>
    fetch(url).then((r) => r.json())
  )

  if (memberErr || yearsErr) return <LoadingError />
  if (!members || !years) return <LoadingSpinner />

  return (
    <>
      {/** navigation begin */}
      <div className="w-100 mt-4">
        {years.response.map((y) => (
          <Button
            key={y.year}
            variant={
              y.year === year ? 'custom-primary' : 'outline-custom-primary'
            }
            className="mb-2  mb-md-0 mr-3"
            onClick={() => setYear(y.year)}
          >
            {y.year}
          </Button>
        ))}
        <Button
          onClick={() => setYear('all')}
          variant={year === 'all' ? 'custom-primary' : 'outline-custom-primary'}
        >
          All
        </Button>
        <Button
          onClick={() => router.push('/directory')}
          variant="outline-custom-primary mb-2  mb-md-0 ml-3"
        >
          Directory
        </Button>
        <hr className="my-3" />
      </div>
      {/** navigation end */}
      <div className={styles.container}>
        <div className={styles.imgGrid}>
          {members.response.map((m) => (
            <figure className={figStyles.memberFigure} key={m._id}>
              <Image
                src={`/c_scale,h_200${m.image}`}
                width={200}
                height={250}
                alt={m.name}
                layout="intrinsic"
              />
              <figcaption>
                <Link href={encodeURI(`/inductee/${m.slug}`)}>
                  <a className={styles.imgLink}>
                    <h4>{m.name}</h4>
                    <p>{`Inducted ${m.inducted}`}</p>
                  </a>
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  )
}

export default MemberGrid