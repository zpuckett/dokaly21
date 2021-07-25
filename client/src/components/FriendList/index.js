import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <h5>{username}, is not a fan of anyone yet!</h5>;
  }

  return (
    <div>
      <h5>
        {friendCount === 1 ? 'Fan of:' : 'Fan of:'}
      </h5>
      <div className="buttons">
      {friends.map(friend => (
        <button className='button' key={friend._id}>
          <Link to={`/profile/${friend.username}`} key={friend._id}>{friend.username}</Link>
        </button>
      ))}
      </div>
    </div>
  );
};

export default FriendList;
//{friendCount}