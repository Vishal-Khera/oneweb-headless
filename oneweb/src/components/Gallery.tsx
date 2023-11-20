import React, { useEffect, useState } from 'react';
import { dictionaryServiceFactory } from 'lib/dictionary-service-factory';
import {
  Field,
  RichText as JssRichText,
  Image as JssImage,
  ImageField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Description: Field<string>;
  Image: ImageField;
  Gallery: ImageField[]; // Assuming Gallery is an array of ImageField
}

interface MultiListProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
  index: number;
  children: JSX.Element;
}

const Default = ({ fields }: MultiListProps): JSX.Element => {
  const siteName = 'oneweb';
  const dictionaryService = dictionaryServiceFactory.create(siteName);
  const [galleryHeading, setGalleryHeading] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDictionaryData() {
      try {
        const data = await dictionaryService.fetchDictionaryData('en');
        if (data && data.Gallery_Heading) {
          setGalleryHeading(data.Gallery_Heading);
        }
      } catch (error) {
        console.error('Error fetching dictionary data:', error);
      }
    }
    fetchDictionaryData();
  }, []);

  return (
    <div className="cards">
      <div className="component-title">
        <h1>{galleryHeading}</h1>
      </div>
      <div className="content-cards">
        {fields.Gallery?.map((galleryItem, index) => (
          <div className="blog-box heading-space-half" key={galleryItem.id || index}>
            <div className="blog-listing-inner news_item">
              <div className="content-card">
                <div className="field-promoicon">
                  <JssImage field={galleryItem.fields.Image} />
                </div>
                <div className="news_desc">
                  <h3 className="font-weight-normal">
                    <JssRichText field={galleryItem.fields.Title as Field<string>} />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Default;
