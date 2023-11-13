import React from 'react';
import {
  ComponentRendering,
  Placeholder,
  ComponentParams,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Title: Field<string>;
  Link: LinkField;
  Description: Field<string>;
}

type PromoProps = {
  params: ComponentParams;
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKey = `DynamicCard-${props.params.DynamicPlaceholderId}`;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="row">
          <div className="field-cardimage col-md-6">
          <Placeholder name={phKey} rendering={props.rendering} />
          </div>
          <div className="col-md-6">
            <div className="field-cardtitle">
              <JssRichText field={props.fields.Title} />
            </div>
            <div className="field-carddescription">
              <JssRichText field={props.fields.Description} />
            </div>
            <div className="fieldLink">
              <JssLink field={props.fields.Link} />
            </div>
          </div>
        </div>
      </div>
    </div>    
    );
  }

  return <PromoDefaultComponent {...props} />;
};