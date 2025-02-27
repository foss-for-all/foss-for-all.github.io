import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PictogramIcon from '@site/static/img/pictogram.svg';

import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__title}><Translate id='homepage.heroBanner.tagLine'>지속 가능한 자유-오픈소스 소프트웨어 생태계 구축을 위한 이니셔티브</Translate></p>

      </div>
      <div className="container images" style={{ textAlign: 'center' }}>
        <PictogramIcon style={{ maxWidth: "100%", maxHeight: 400 }} />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.objectives}>
          <div className="container">
            <div className="row">
              <p>
                <Translate id='homepage.objectives.summary1'>
                  FOSS for All (포스포올)은 지속 가능한 오픈소스 생태계 구축을 위해 한국 내 다양한 자유-오픈소스 커뮤니티와 프로젝트가 모여 시작된 이니셔티브 입니다.
                  법인으로 보는 단체 등록과 첫 컨퍼런스 개최를 시작으로, 중장기적으로 비영리법인 설립과 공익법인(기부금단체) 지정과
                  프로젝트-커뮤니티-기업-사용자간 네트워크를 구축하는 등 다양한 활동을 전개하고자 합니다.
                </Translate>
              </p>
              <p>
                <Translate id='homepage.objectives.summary2'>
                  이를 통해, 한국내는 물론 전세계 다양한 오픈소스 프로젝트 및 커뮤니티가 직접 법인을 설립하거나,
                  많은 서류 작업을 하거나, 그 외 운영에 필요한 각종 정보를 알기 위한 시행착오를 하지 않고도
                  투명하면서도 중요하다고 생각되는 것에 더 집중할 수 있도록 지원하여 지속 가능한 자유-오픈소스 생태계 구축에 기여하고자 합니다.
                </Translate>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <h2>🪙✍️⚖️</h2>
                <h3><Translate id='homepage.objectives.fiscalSponsorship'>Fiscal sponsorship</Translate></h3>
                <p><Translate id='homepage.objectives.fiscalSponsorship.description'>자유-오픈소스 커뮤니티와 프로젝트가 단체를 등록하거나 법인 설립을 하지 않고도 기업이나 개인의 후원을 받아 공금을 조성하고 사용할 수 있도록,
                  그리고 편리하면서도 투명하게 공금과 다른 자산을 관리할 수 있도록, Fiscal sponsorship을 제공하고자 합니다. 이는 비영리법인 설립 후 추진 될, 중장기적인 목표 중 하나 입니다.</Translate></p>
              </div>
              <div className={clsx('col col--4')}>
                <h2>🗣️🎙️🧑‍💻</h2>
                <h3><Translate id='homepage.objectives.conference'>FOSS for All 컨퍼런스</Translate></h3>
                <p><Translate id='homepage.objectives.conference.description1'>국내외 다양한 자유-오픈소스 커뮤니티가 모여 교류하고, 잘 알려지지 않은 프로젝트의 확산,
                  커뮤니티 참여자들의 공통된 그리고 새로운 고민을 함께 논의할 수 있는 컨퍼런스를 매년 개최하고자 합니다.</Translate></p>
                <p><Translate id='homepage.objectives.conference.description2'>이를 통해 컨퍼런스 참석자들이 자유-오픈소스 프로젝트에 더 적극적으로 그리고 지속적으로 참여 및 기여하도록 하고자 합니다.</Translate></p>
              </div>
              <div className={clsx('col col--4')}>
                <h2>🧑‍💻🤝🏢</h2>
                <h3><Translate id='homepage.objectives.network'>생태계 참여자간 네트워크 구축</Translate></h3>
                <p><Translate id='homepage.objectives.network.description1'>여러 자유-오픈소스 프로젝트와 자유-오픈소스 생태계의 다양한 참여자(메인테이너, 기여자, 애호가, 사용자, 기업, 관련 단체와 기관 등)간 네트워크를 구축하여,
                  FOSS for All 이 그 사이 촉매제 역할을 하고자 합니다.</Translate></p>
                <p><Translate id='homepage.objectives.network.description2'>상호간 각종 사례와 경험 공유될 수 있도록 함은 물론, 생태계 참여자간 필요하면 협업하여 시너지를 만들 수 있도록 필요한 지원을 제공 할 것입니다.</Translate>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
