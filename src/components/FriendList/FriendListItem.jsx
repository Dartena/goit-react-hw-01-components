import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";

const FriendListItem = ({ friend }) => {
  const { name, avatar, isOnline } = friend;
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.status_online}></span>
      ) : (
        <span className={styles.status_offline}></span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
