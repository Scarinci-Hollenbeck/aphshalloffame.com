import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SubMenu from 'layouts/SubMenu';
import MemberGrid from 'components/MemberGrid';
import About from 'components/About';
import Latest from 'components/Latest';
import MissionStatement from 'components/MissionStatement';
import styles from 'styles/SubMenu.module.css';

export default function Home() {
  const [tab, setTab] = useState('latest');

  return (
    <Container className="mx-0 px-0">
      <Head>
        <title>Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row className="mx-0">
          <Col sm={12} md={2} className="mx-0 px-0">
            <h3 className={styles.subMenuTitle}>
              <strong>Welcome</strong>
            </h3>
          </Col>
          <Col
            sm={12}
            md={{ span: 6, offset: 2 }}
            className={styles.subMenuTitle}
          >
            <Button
              onClick={() => setTab('latest')}
              variant="link"
              className={
                tab === 'latest' ? styles.activeBtn : styles.subMenuBtn
              }
            >
              Latest
            </Button>
            <Button
              variant="link"
              onClick={() => setTab('about')}
              className={tab === 'about' ? styles.activeBtn : styles.subMenuBtn}
            >
              About
            </Button>
            <Button
              variant="link"
              onClick={() => setTab('mission statement')}
              className={
                tab === 'mission statement'
                  ? styles.activeBtn
                  : styles.subMenuBtn
              }
            >
              Mission Statement
            </Button>
          </Col>
        </Row>
      </SubMenu>
      <Row className="mx-2 mt-2 content">
        <Col sm={12} className="px-0">
          {tab === 'latest' && <Latest />}
          {tab === 'about' && (
            <div className="my-4">
              <h3 className={styles.membersTitle}>
                <strong>History & Background</strong>
              </h3>
              <About />
            </div>
          )}
          {tab === 'mission statement' && (
            <div className="my-4">
              <h3 className={styles.membersTitle}>
                <strong>Mission Statement</strong>
              </h3>
              <MissionStatement />
            </div>
          )}
        </Col>
      </Row>
      <Row className="mx-2 pt-2 content-no-border">
        <Col sm={12}>
          <h3 className={styles.membersTitle}>
            <strong>Hall of Fame Members</strong>
          </h3>
          <MemberGrid />
        </Col>
      </Row>
    </Container>
  );
}
