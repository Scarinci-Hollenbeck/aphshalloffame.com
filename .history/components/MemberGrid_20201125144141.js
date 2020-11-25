/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import Button from 'react-bootstrap/Button'
import styles from 'styles/MemberGallery.module.css'
import { setThumbnail } from 'utils/helpers'
import stylesMenu from '../styles/SubMenu.module.css'

// https://codepen.io/jhermansen/pen/YqEReZ
export default function MemberGrid() {
  const [year, setYear] = useState('all')

  const { data: members, error: memberErr } = useSWR(
    `/api/get-members/${year}`,
    (url) => fetch(url).then((r) => r.json())
  )

  if (memberErr) return <div>failed to load</div>
  if (!members) return <div>loading...</div>
  return (
    <div className={styles.imgGrid}>
      {/** navigation begin */}
      <div className={styles.GalleryNav}>
        <Button
          onClick={() => setYear('all')}
          variant="link"
          className={year === 'all' ? styles.activeBtn : styles.subMenuBtn}
        >
          ALL
        </Button>
        <Button
          variant="link"
          onClick={() => setYear('2018')}
          className={year === '2018' ? styles.activeBtn : styles.subMenuBtn}
        >
          2018
        </Button>
        <Button
          variant="link"
          onClick={() => setYear('2016')}
          className={year === '2016' ? styles.activeBtn : styles.subMenuBtn}
        >
          2016
        </Button>
      </div>
      {/** navigation end */}
      {members.data.map((m) => (
        <Link href={`/inductee/${m._id}`}>
          <a className={styles.imgLink}>
            <figure className={styles.figCaption}>
              <img
                key={m._id}
                src={setThumbnail(m.image)}
                width={120}
                height={150}
                alt={m.name}
              />
              <figcaption>
                {m.name}
                <br />
                {`Inducted ${m.inducted}`}
              </figcaption>
            </figure>
          </a>
        </Link>
      ))}
    </div>
  )
}
