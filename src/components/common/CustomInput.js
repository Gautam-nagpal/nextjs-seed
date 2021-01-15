import React, { useState } from "react"
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { COUNTRY_CODE } from '@constants';


export default function CustomInput(props) {
	const { onChange, value, error = '', type = 'text', placeholder = '', id = '', className = '', label, ...rest } = props

	const [show, setShow] = useState(false);

	function toggle() {
		setShow(!show)
	}
	if (type === 'phone') {
		return (
			<div>
				<TextField
					id={id}
					type="text"
					value={value}
					onChange={onChange}
					label={label}
					variant="outlined"
					className={className}
					placeholder={placeholder}
					InputProps={{
						startAdornment: <InputAdornment position="start">{COUNTRY_CODE}</InputAdornment>
					}}
					{...rest}
				/>
				{error && <p className="error">{error}</p>}
			</div>
		)
	}

	if (type === 'password') {
		return (
			<div>
				<TextField
					id={id}
					type={show ? 'text' : type}
					value={value}
					onChange={onChange}
					label={label}
					variant="outlined"
					className={className}
					placeholder={placeholder}
					InputProps={{
						endAdornment: <InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={toggle}
							>
								{show ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}}
					{...rest}
				/>
				{error && <p className="error">{error}</p>}
			</div>
		)
	}

	return (
		<div>
			<TextField
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				label={label}
				variant="outlined"
				className={className}
				placeholder={placeholder}
				{...rest}
			/>
			{error && <p className="error">{error}</p>}
		</div>
	)
}