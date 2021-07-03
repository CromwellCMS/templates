import { TFrontendPluginProps, TGetStaticProps } from '@cromwell/core';
import React from 'react';

type DataType = {
  message: string;
}

export default function YouPluginName(props: TFrontendPluginProps<DataType>) {
  return (
    <div>
      <p>Static props: {props.data?.message}</p>
      <p>Plugin settings: {props.globalSettings + ''}</p>
    </div>
  )
}

export const getStaticProps: TGetStaticProps = async (context): Promise<DataType> => {
  return {
    message: 'Hello world'
  }
}