import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const withExpandButton = (WrappedComponent) => {
	const WithExpandButton = (props) => {

		const [open, setOpen] = useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);

		return (
			<Container>
				<Stack>
					<IconButton aria-label="expand" size="large" onClick={handleOpen} style={{alignSelf: 'flex-end'}}>
						<OpenWithIcon fontSize="inherit" />
					</IconButton>
					<WrappedComponent {...props} />
				</Stack>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Expanded Modal
						</Typography>
						<WrappedComponent id="modal-modal-description" {...props} />
					</Box>
				</Modal>
			</Container>
		)
	};
	return WithExpandButton;
};

export default withExpandButton;
