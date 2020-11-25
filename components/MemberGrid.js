/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import Masonry from 'react-masonry-css'
import styles from '../styles/MasonryCSS.module.css'
import { setThumbnail } from '../utils/helpers'

export default function MemberGrid() {
  const [showCaption, setShowCaption] = useState(false)

  const { data: members, error: memberErr } = useSWR(
    '/api/get-members',
    (url) => fetch(url).then((r) => r.json())
  )
  if (memberErr) return <div>failed to load</div>
  if (!members) return <div>loading...</div>
  return (
    <>
      <Masonry
        breakpointCols={5}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {members.data.map((m) => (
          <div key={m._id}>
            <Image
              src={setThumbnail(m.image)}
              alt={m.name}
              width={200}
              height={250}
              layout="intrinsic"
              onMouseEnter={() => setShowCaption(true)}
              // onMouseExit={() => setShowCaption(false)}
            />
            <span style={{ display: showCaption ? 'initial' : 'none' }}>
              {m.name}
              <br />
              {`Inducted: ${m.inducted}`}
            </span>
          </div>
        ))}
      </Masonry>
    </>
  )
}
