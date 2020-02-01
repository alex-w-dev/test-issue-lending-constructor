export type ISiteTemplateBlockType = 'header' | 'common'| 'root' | 'slide-show' | 'footer';

export interface ISiteTemplateBlock {
  type: ISiteTemplateBlockType;
  title: string;
  children: ISiteTemplateBlock[];
}

export interface ISiteTemplate extends ISiteTemplateBlock {
  type: 'root';
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
}

export interface IHeaderTemplateBlock extends ISiteTemplateBlock {
  type: 'header';
}

export interface IRootTemplateBlock extends ISiteTemplateBlock {
  type: 'root';
  width: string;
}

export interface ICommonTemplateBlock extends ISiteTemplateBlock {
  type: 'common';
  height: number;
}
