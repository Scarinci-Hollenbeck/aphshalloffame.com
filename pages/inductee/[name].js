/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SubMenu from 'layouts/SubMenu'
import styles from 'styles/SubMenu.module.css'
import memberStyles from 'styles/Biography.module.css'
import LoadingError from 'components/LoadingError'
import LoadingSpinner from 'components/LoadingSpinner'
import { createMarkup } from 'utils/helpers'

export default function Profile() {
  const router = useRouter()
  const { name } = router.query

  const { data: member, error: memberErr } = useSWR(
    `/api/get-members/${name}`,
    (url) => fetch(url).then((r) => r.json())
  )

  if (memberErr) return <LoadingError />
  if (!member) return <LoadingSpinner />
  return (
    <Container>
      <Head>
        <title>{`${name} - Asbury Park High School Hall of Fame`}</title>
        <meta
          name="description"
          content={`${name} graduated from Asbury Park High School in ${member.class}, and was inducted to the Asbury Park High School Hall of Fame in ${member.inducted}.`}
        />
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12}>
            <h3 className={styles.subMenuTitle}>
              <strong>Profile</strong>
            </h3>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col
          sm={{ order: 'last', span: 12 }}
          md={{ order: 'first', span: 6 }}
          className="p-4"
        >
          <h3>
            <strong className={memberStyles.name}>{name}</strong>
          </h3>
          <div className={`${memberStyles.classInductedContainer} p-2 my-4`}>
            <p className="p-0 m-0">
              <strong>Class:</strong> {member.data.class}{' '}
              <strong>Inducted:</strong> {member.data.inducted}
            </p>
          </div>
          <div dangerouslySetInnerHTML={createMarkup(member.data.biography)} />
        </Col>
        <Col
          sm={{ order: 'first', span: 12 }}
          md={{ order: 'last', span: 6 }}
          className="p-4"
        >
          <div className={memberStyles.m6}>
            <Image
              src={`/c_scale,r_8,w_350/${member.data.image}`}
              alt={member.data.name}
              width="350"
              height="420"
              layout="intrinsic"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
