import { StaticList, SampleList, DynamicList } from './LISTS.js';

export default () => {
  
    let block1 = new StaticList('/api/list', '.block1');
    let block2 = new SampleList('/api/', '.block2');
    let block3 = new DynamicList('/api/dynamic', '.block3');
};
