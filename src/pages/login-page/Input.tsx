import { FaKey as KeyIcon } from 'react-icons/fa';
import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface InputProps {
	inputValue: string;
	setInputValue: (inputValue: string) => void;
}

export default function Input({ inputValue, setInputValue }: InputProps) {
	return (
		<StyledInputBox>
			<KeyIcon className='icon' />
			<StyledInput
				type='text'
				value={inputValue}
				defaultValue={inputValue}
				onChange={handleInputChange}
				placeholder='XxXxXxXxXxXxXxXxX'
			/>
		</StyledInputBox>
	);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}
}

const StyledInputBox = styled.div`
	width: 490px;
	height: 65px;
	background: #464444;
	border-radius: 10px;

	display: flex;
	align-items: center;
	padding: 0 25px;

	.icon {
		margin-right: 25px;
		height: 2em;
		font-size: 25px;
		color: #bdbdbd;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0;
	background: none;
	border: none;
	outline: none;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: 'Roboto';
	font-style: italic;
	font-weight: 700;
	font-size: 28px;
	line-height: 0px;
	color: #fff;

	::placeholder {
		width: 100%;
		height: 100%;
		font-style: bold;
		color: #a2a2a2;
	}
`;
