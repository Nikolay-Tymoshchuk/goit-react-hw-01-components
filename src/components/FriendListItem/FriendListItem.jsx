import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { imgWidth } from 'constants';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'online' : 'offline';
  return (
    <li className={css.item}>
      <span className={css.currentStatus} status={status}></span>
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
};
