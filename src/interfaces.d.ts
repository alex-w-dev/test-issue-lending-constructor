export interface ISiteTemplate {
  title: string;
  keywords: string;
  description: string;
  blocks: ISiteTemplateBlock[];
}

export type ISiteTemplateBlockType = 'header' | 'common' | 'slide-show' | 'footer';

export interface ISiteTemplateBlock {
  type: ISiteTemplateBlockType;
  title: string;
}

export interface IHeaderTemplateBlock extends ISiteTemplateBlock {
  type: 'header';
}

export interface ICommonTemplateBlock extends ISiteTemplateBlock {
  type: 'common';
}
