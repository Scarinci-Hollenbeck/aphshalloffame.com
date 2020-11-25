/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import styles from 'styles/MemberGallery.module.css'
import { setThumbnail } from 'utils/helpers'

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
