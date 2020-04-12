import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  const onDelete = () => {
    console.log('i am at the start');
    console.log('i am at the end ');
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='gray-text'>
          <span className='black-text'>Id # {log.id}</span> last Updated by{' '}
          <span className='blac-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM do YYYY, h:mm;ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.proptype = {
  log: PropTypes.object.isRequired,
};
export default LogItem;