import PropTypes from 'prop-types';

const User = ({ user }) => {
  if (!user) {
    return <li>No user data available.</li>;
  }

  const { name } = user;

  return (
    <li>
      <h1>
        {name?.first}
        {' '}
        {name?.last}
      </h1>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

User.defaultProps = {
  user: null,
};

export default User;
