import { TCromwellPage, TGetStaticProps } from '@cromwell/core';
import { CContainer, CImage, CPlugin, registerPluginSSR } from '@cromwell/core-frontend';
import React from 'react';

import styles from './index.module.scss';

type IdexProps = {
  data: string;
}

registerPluginSSR('@cromwell/plugin-main-menu', '*');

const HomePage: TCromwellPage<IdexProps> = (props) => (
  <CContainer id="home_root" className={styles.container}>
    <CPlugin id="header_main_menu" pluginName="@cromwell/plugin-main-menu" />
    <CContainer id="home_title" style={{ margin: '20px auto' }}>
      <h1>Hello {props.data}</h1>
    </CContainer>
    <CImage id="home_logo" src="/themes/cromwell-theme-template/logo.svg" width={200} height={200} />
  </CContainer>
)

export default HomePage;

export const getStaticProps: TGetStaticProps<IdexProps> = async (context) => {
  return {
    props: {
      data: 'Cromwell CMS'
    }
  }
}