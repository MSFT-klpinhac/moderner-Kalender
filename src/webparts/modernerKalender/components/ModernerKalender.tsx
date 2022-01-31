import * as React from 'react';
import styles from './ModernerKalender.module.scss';
import { IModernerKalenderProps } from './IModernerKalenderProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";


export default class ModernerKalender extends React.Component<IModernerKalenderProps, {}> {



  public render(): React.ReactElement<IModernerKalenderProps> {
    return (
      <Placeholder iconName='Edit'
      iconText='Configure your web part'
      description='Please configure the web part.'
      buttonLabel='Configure'
      />
    );
  }
}
