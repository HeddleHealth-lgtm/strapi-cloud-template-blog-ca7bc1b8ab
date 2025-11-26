import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFeaturedStories extends Struct.ComponentSchema {
  collectionName: 'components_shared_featured_stories';
  info: {
    displayName: 'featured-story';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image-source', false> &
      Schema.Attribute.Required;
    linkUrl: Schema.Attribute.String & Schema.Attribute.Required;
    quote_EN: Schema.Attribute.Text & Schema.Attribute.Required;
    quote_ES: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImageSource extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_sources';
  info: {
    displayName: 'ImageSource';
    icon: 'picture';
  };
  attributes: {
    altDesc: Schema.Attribute.String & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['upload', 'external']> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedPressVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_press_videos';
  info: {
    displayName: 'press-video';
  };
  attributes: {
    linkUrl: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'shared.image-source', false>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Component<'shared.video-source', false>;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'message';
  };
  attributes: {
    age: Schema.Attribute.String;
    author: Schema.Attribute.String & Schema.Attribute.Required;
    quoteText_EN: Schema.Attribute.Text & Schema.Attribute.Required;
    quoteText_ES: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedVideoSource extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_sources';
  info: {
    displayName: 'VideoSource';
    icon: 'play';
  };
  attributes: {
    altDesc: Schema.Attribute.String & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['upload', 'external']> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.featured-stories': SharedFeaturedStories;
      'shared.image-source': SharedImageSource;
      'shared.press-video': SharedPressVideo;
      'shared.testimonial': SharedTestimonial;
      'shared.video-source': SharedVideoSource;
    }
  }
}
