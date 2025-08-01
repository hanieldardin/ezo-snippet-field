import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Welcome to Ezo Snippet Field"
      description="Explore useful Lua snippets for your Roblox creations">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">🌽 Ezo Snippet Field</h1>
          <p className="hero__subtitle">A curated crop of useful Roblox + Lua snippets</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Explore Docs
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/snippets/click-detector">
              Jump to Snippets
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
