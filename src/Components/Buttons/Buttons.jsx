import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Buttons.styled';

export const Button = ({ options, onLeavFeedback }) =>
    options.map(option => (
        <ButtonStyle type="button" key={option} onClick={() => onLeavFeedback(option)}>
            {option}
        </ButtonStyle>
    ));

Button.protoTypes = {
    options: PropTypes.array,
    onLeavFeedback: PropTypes.func,
};



