import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shapeOf({
      id: PropTypes.string,
    })
  ).isRequired,
};

export default FriendList;
