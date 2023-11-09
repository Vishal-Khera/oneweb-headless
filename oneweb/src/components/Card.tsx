import React from 'react';
import {
  Image as JssImage,
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
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Card_With_Image_Left = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="row">
          <div className="field-cardimage col-md-6">
            <JssImage field={props.fields.Image} />
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

export const Card_With_Image_Right = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="row">
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
          <div className="field-cardimage col-md-6">
            <JssImage field={props.fields.Image} />
          </div>
        </div>
      </div>
    </div>    
    );
  }

  return <PromoDefaultComponent {...props} />;
};




