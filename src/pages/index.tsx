import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Developer Resources',
    imageUrl: 'img/people.png',
    description: (
      <>
        Resources, tools and information for developers and enthusiasts working on all areas of CovidGraph, including data loading, graph processing, server infrastructure as well as the front end applications like the Visual Graph Explorer and the React App.
      </>
    ),
  },
  {
    title: 'End User Guidance',
    imageUrl: 'img/wave.png',
    description: (
      <>
        Application guidance aimed at Researchers, Policy Makers, Journalists, Healthcare workers and interested members of the public to get the most out of the rich data connections in CovidGraph.
      </>
    ),
  },
  {
    title: 'Full Schema Documentation',
    imageUrl: 'img/graph.png',
    description: (
      <>
        Comprehensive and detailed Schema documentation and resources, primarily to help developers navigate the structure of the graph but also useful for more technically minded users seeking more context.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="HealthECCO is a non-profit association that develops CovidGraph<head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src='img/full_he_logo_white.png'/>,
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
