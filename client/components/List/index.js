import List from './List';
import Item from './Item';
import ItemWithImage from './ItemWithImage';

export { Item, List, ItemWithImage };

export default Object.assign(List, {
    Item, ItemWithImage
});