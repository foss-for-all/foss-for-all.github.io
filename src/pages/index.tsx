import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import OpenSourceIcon from '@site/static/img/opensource.svg';
import PeopleIcon from '@site/static/img/people.svg';
import LeafIcon from '@site/static/img/leaf.svg';
import HeartIcon from '@site/static/img/hand-heart.svg';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__title"><Translate id='homepage.heroBanner.tagLine'>지속 가능한 자유-오픈소스 소프트웨어 생태계 구축을 위한 이니셔티브</Translate></p>
        
      </div>
      <div className="container images" style={{ textAlign: 'center'}}>
        <OpenSourceIcon height={200}/>
        <PeopleIcon height={200}/><br/>
        <LeafIcon height={200}/>
        <HeartIcon height={200}/>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
