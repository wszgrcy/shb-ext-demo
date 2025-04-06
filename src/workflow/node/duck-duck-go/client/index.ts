import { ComponentInput } from '@shenghuabi/sdk/componentDefine';
import { NODE_DEFINE } from '../common/define';

export default (input: ComponentInput) => {
  return {
    displayConfig: NODE_DEFINE(input),
    config: NODE_DEFINE(input),
    initData: () => {
      return {
        data: {
          transform: {
            resizable: true,
          },
          title: '对话',
        },
        width: 300,
      };
    },
  };
};
