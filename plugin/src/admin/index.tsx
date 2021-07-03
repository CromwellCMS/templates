import { TPluginSettingsProps } from '@cromwell/core';
import { registerWidget } from '@cromwell/core-frontend';
import React from 'react';


type MySettingsType = {
  someProp: string;
}

function SettingsPage(props: TPluginSettingsProps<MySettingsType>) {
  return (
    <div>
      <h1>Hello Admin Panel!</h1>
      <p>{props.globalSettings.someProp}</p>
    </div>
  )
}

registerWidget({
  pluginName: 'your-plugin-name',
  widgetName: 'PluginSettings',
  component: SettingsPage
});