import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "./IconButton.styled";


//import { VscClose } from "react-icons/vsc";
//import './IconButton.scss';

const IconButton = ({ children, onClick, ...allyProps }) => (
	<Button type="button" onClick={onClick} {...allyProps}>
		{children}
	</Button>
);

IconButton.defaultProps = {
	onClick: () => null,
	children: null,
};

IconButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
	'aria-label': PropTypes.string.isRequired,
};

export default IconButton;

//className="IconButton"