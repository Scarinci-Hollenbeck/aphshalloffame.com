/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import Button from 'react-bootstrap/Button';
import styles from 'styles/MemberGallery.module.css';
import stylesMenu from 'styles/SubMenu.module.css';
import figStyles from 'styles/Figures.module.css';
import LoadingError from './LoadingError'
import LoadingSpinner from './LoadingSpinner'

export default function MemberGrid() {
  const [year, setYear] = useState('all');

  const { data: members, error: memberErr } = useSWR(
    `/api/get-members/${year}`,
    (url) => fetch(url).then((r) => r.json()),
  );

  const { data: years, error: yearsErr } = useSWR('/api/get-years', (url) => fetch(url).then((r) => r.json()));

  if (memberErr || yearsErr) return <LoadingError />;
  if (!members || !years) return <LoadingSpinner />;

  console.log(members)
  


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
          <figure className={figStyles.memberFigure} key={m._id}>
            <Image
              src={`/c_scale,w_120${m.image}`}
              width={120}
              height={150}
              alt={m.name}
            />
            <figcaption>
              <Link href={`/inductee/${m.inducted}?name=${m.name}`}>
                <a className={styles.imgLink}>
                  <h4>{m.name}</h4>
                  <p>{`Inducted ${m.inducted}`}</p>
                </a>
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
