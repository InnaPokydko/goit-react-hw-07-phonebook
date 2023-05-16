import PropTypes from 'prop-types';
import { ContactStyle, BtnDelete } from './ContactItem.styled';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <ContactStyle>
      {name}: {number}
      <BtnDelete type="button" onClick={() => onDelete(id)}>
        <RiDeleteBin6Line style={{ width: '16px', height: '16px', fill: 'white' }} />
      </BtnDelete>
    </ContactStyle>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};