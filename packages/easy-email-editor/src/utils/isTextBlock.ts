import { BasicType, AdvancedType } from 'suma-editor-base';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
}
