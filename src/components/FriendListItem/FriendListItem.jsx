import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { imgWidth } from 'constants';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? '#00b300' : '#ff0000' }}
      >
        {isOnline}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width={imgWidth.small}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
