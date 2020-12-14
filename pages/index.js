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
    <Container>
      <Head>
        <title>Asbury Park High School Hall of Fame</title>
      </Head>
      <SubMenu>
        <Row>
          <Col sm={12} md={2}>
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
        <Col sm={12} md={6} className="p-4">
          {tab === 'latest' && (
            <>
              <h3 className={styles.membersTitle}>
                <strong>APHS Hall of Fame</strong>
              </h3>
              <Latest />
            </>
          )}
          {tab === 'about' && (
            <>
              <h3 className={styles.membersTitle}>
                <strong>History & Background</strong>
              </h3>
              <About />
            </>
          )}
          {tab === 'mission statement' && (
            <>
              <h3 className={styles.membersTitle}>
                <strong>Mission Statement</strong>
              </h3>
              <MissionStatement />
            </>
          )}
        </Col>
        <Col sm={12} md={6} className="p-4">
          <Image
            src="/c_scale,r_8,w_800/v1605826428/asburyparkhighschoolhalloffame/asburyparkhighschool-original_bbs069.jpg"
            alt="Asbury Park High School"
            width="800"
            height="452"
            layout="responsive"
          />
        </Col>
      </Row>
      {/*
      {(tab === 'latest') && (
        <Row className="mx-2 content-no-border text-center">
          <Col sm={12}>
          <p>
            <strong>
              Congratulations Class of 2016 Inductees
            </strong>
          </p>
          <p>
            <strong>Dr. Barry Anton </strong><br/>
            {' '}
            Psychologist and President of American Psychological Association.
          </p>
          <p>
            <strong>Nicholas Baldino (Deceased) </strong><br/>
            {' '}
            Class of 1939 Retired Senior Vice President of Chemical Bank, NY
          </p>
          <p>
            <strong>James Barrett </strong><br/>
            {' '}
            Class of 1978 Regimental Command Sergeant Major, US Army
          </p>
          <p>
            <strong>Robert Beauford </strong><br/>
            {' '}
            Asbury Schools Principal
          </p>
          <p>
            <strong>Dr. Ronald Crystal </strong><br/>
            {' '}
            Class of 1958 Human Gene Therapy Researcher
          </p>
          <p>
            <strong>Benjamin Danskin (Deceased) </strong><br/>
            {' '}
            Class of 1941 Political Leader of Monmouth County
          </p>
          <p>
            <strong>Valerie Echolls Gardner </strong><br/>
            {' '}
            Class of 1982 Colonel, US Army
          </p>
          <p>
            <strong>Derrick Griggs </strong><br/>
            {' '}
            Class of 1993 Chief Operating Officer, Affordable Housing Alliance
          </p>
          <p>
            <strong>Leroy Hayes </strong><br/>
            {' '}
            Class of 1969 APHS Teacher and Coach for 42 years
          </p>
          <p>
            <strong>Stanley Parker </strong><br/>
            {' '}
            Class of 1971 Teacher, Coach, and First Major College Scholarship Winner
          </p>
          <p>
            <strong>Phyllis Salowe-Kaye </strong><br/>
            {' '}
            Class of 1965 Executive Director NJ Citizens Action
          </p>
          <p>
            <strong>Thomas F. Shebell (Deceased) </strong><br/>
            {' '}
            Former Long Time Mayor of Asbury Park
          </p>
          <p>
            <strong>Dr. Helen L. Smits </strong><br/>
            {' '}
            Class of 1954 Director of Health Standards Federal Department of Health & Human Services
          </p>
          </Col>
        </Row>
      )} */}
      <Row className="mx-2 pt-4 content-no-border">
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
