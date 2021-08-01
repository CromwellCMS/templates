import { TFrontendPluginProps, TGetStaticProps } from '@cromwell/core';
import React from 'react';

import { SettingsType } from '../types';

type DataType = {
  message: string;
  someSettingProp?: string;
}

export default function YouPluginName(props: TFrontendPluginProps<DataType>) {
  return (
    <div>
      <p>Static props: {props.data?.message}</p>
      <p>Setting prop: {props.data?.someSettingProp}</p>
    </div>
  )
}

export const getStaticProps: TGetStaticProps<SettingsType> = async (context): Promise<DataType> => {
  return {
    message: 'Hello world',
    someSettingProp: context.pluginSettings?.someProp,
  }
}