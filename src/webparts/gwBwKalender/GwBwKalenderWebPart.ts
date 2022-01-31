import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'GwBwKalenderWebPartStrings';
import GwBwKalender from './components/GwBwKalender';
import { IGwBwKalenderProps } from './components/IGwBwKalenderProps';

import "@pnp/polyfill-ie11";
import { sp } from "@pnp/sp";


export interface IGwBwKalenderWebPartProps {
  description: string;
}

export default class GwBwKalenderWebPart extends BaseClientSideWebPart<IGwBwKalenderWebPartProps> {

  protected async onInit(): Promise<void> { // https://pnp.github.io/pnpjs/getting-started/
    return super.onInit().then(_ => {
      // https://github.com/pnp/pnpjs/issues/978
      sp.setup({
        spfxContext: this.context as any
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<IGwBwKalenderProps > = React.createElement(
      GwBwKalender,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
