import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './ListItem.styled';
const ListItem = ({ film: { id, name, title } }) => {
  return (
    <>
      <List>
        <Link to={`/movies/${id}`}>{name || title}</Link>
      </List>
    </>
  );
};

ListItem.prototype = {
  film: PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    title: PropType.string.isRequired,
  }),
};

export default ListItem;