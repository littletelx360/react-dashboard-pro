import { OrderedListOutlined } from '@ant-design/icons';
import Panel from './component';
import snapShot from './snapshot.png';

export default {
  name: 'Popular',
  description: 'PopularList',
  tags: ['all','list'],
  component: Panel,
  configComponent: null,
  maxLength: 2,
  snapShot,
  icon: <OrderedListOutlined />,
  iconBackground: 'green',
  size: {
    defaultWidth: 4,
    defaultHeight: 5,
    maxWidth: 12,
    maxHeight: 16,
    minWidth: 2,
    minHeight: 4,
  },
}