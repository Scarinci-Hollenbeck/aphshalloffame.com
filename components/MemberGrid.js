/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import Button from 'react-bootstrap/Button';
import styles from 'styles/MemberGallery.module.css';
import { setThumbnail } from 'utils/helpers';
import stylesMenu from '../styles/SubMenu.module.css';

export default function MemberGrid() {
  const [year, setYear] = useState('all');

  const { data: members, error: memberErr } = useSWR(
    `/api/get-members/${year}`,
    (url) => fetch(url).then((r) => r.json()),
  );

  const { data: years, error: yearsErr } = useSWR('/api/get-years', (url) => fetch(url).then((r) => r.json()));

  if (memberErr) return <div>failed to members</div>;
  if (yearsErr) return <div>failed to years</div>;
  if (!members) return <div>loading members...</div>;
  if (!years) return <div>loading years...</div>;

  return (
    <>
      {/** navigation begin */}
      <div className={stylesMenu.GalleryNav}>
        <Button
          onClick={() => setYear('all')}
          variant="link"
          className={
            year === 'all' ? stylesMenu.activeBtn : stylesMenu.subMenuBtn
          }
        >
          All
        </Button>
        {years.data.map((y) => (
          <Button
            key={y.year}
            variant="link"
            onClick={() => setYear(y.year)}
            className={
              year === y.year ? stylesMenu.activeBtn : stylesMenu.subMenuBtn
            }
          >
            {y.year}
          </Button>
        ))}
      </div>
      {/** navigation end */}
      <div className={styles.imgGrid}>
        {members.data.map((m) => (
          <Link href={`/inductee/${m._id}`} key={m._id}>
            <a className={styles.imgLink}>
              <figure className={styles.figCaption}>
                <img
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
    </>
  );
}
