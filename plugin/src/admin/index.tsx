import { TPluginSettingsProps } from '@cromwell/core';
import { registerWidget } from '@cromwell/core-frontend';
import React from 'react';

import { SettingsType } from '../types';

function SettingsPage(props: TPluginSettingsProps<SettingsType>) {
  return (
    <div>
      <h1>Hello Admin Panel!</h1>
      <p>{props.pluginSettings?.someProp}</p>
    </div>
  )
}

registerWidget({
  pluginName: 'your-plugin-name',
  widgetName: 'PluginSettings',
  component: SettingsPage
});