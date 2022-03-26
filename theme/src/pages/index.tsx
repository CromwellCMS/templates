import { TCromwellPage, TGetStaticProps } from '@cromwell/core';
import { CContainer, CImage, CPlugin, registerPlugin } from '@cromwell/core-frontend';
import React from 'react';

import styles from './index.module.scss';

type IdexProps = {
  data: string;
}

registerPlugin('@cromwell/plugin-main-menu', '*');
registerPlugin('@cromwell/plugin-product-showcase', 'index');

const HomePage: TCromwellPage<IdexProps> = (props) => (
  <CContainer id="home_root" className={styles.container}>
    <CPlugin id="header_main_menu" pluginName="@cromwell/plugin-main-menu" />
    <CContainer id="home_title">
      <h1>Hello {props.data}</h1>
    </CContainer>
    <CImage id="home_logo" src="/themes/cromwell-theme-template/logo.png" width={200} height={200} />
    <CPlugin id="home_showcase" pluginName="@cromwell/plugin-product-showcase" style={{ width: '100%' }} />
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