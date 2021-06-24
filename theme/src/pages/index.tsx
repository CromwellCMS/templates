import { TCromwellPage, TGetStaticProps } from '@cromwell/core';
import { CContainer, CImage, CPlugin } from '@cromwell/core-frontend';
import React from 'react';

import styles from './index.module.scss';

type IdexProps = {
  data: string;
}

const HomePage: TCromwellPage<IdexProps> = (props) => (
  <CContainer id="home_root" className={styles.container}>
    <CPlugin id="header_main_menu" />
    <CContainer id="home_title">
      <h1>Hello {props.data}</h1>
    </CContainer>
    <CImage id="home_1" src="/themes/cromwell-theme-template/logo.png" width={200} height={200} />
    <CPlugin id="home_showcase" style={{ width: '100%' }} />
  </CContainer>
)

export default HomePage;

export const getStaticProps: TGetStaticProps = async (context): Promise<IdexProps> => {
  return {
    data: 'Cromwell CMS'
  }
}