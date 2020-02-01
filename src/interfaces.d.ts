export type ISiteTemplateBlockType = 'root' | 'common' | 'absolute' | 'link' | 'text' | 'slide-show' | 'image';

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

// TODO declare all block types! which extends ISiteTemplateBlock
// example commonBLock absoluteBlock etc.
