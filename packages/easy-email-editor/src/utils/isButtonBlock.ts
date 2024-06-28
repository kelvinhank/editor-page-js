import { BasicType, AdvancedType } from 'suma-editor-base';

export function isButtonBlock(blockType: any) {
  return blockType === BasicType.BUTTON || blockType === AdvancedType.BUTTON;
}
