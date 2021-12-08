import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const withLoading = (WrappedComponent) => {
	const WithLoading = (props) => {
		const [isLoading, setLoading] = useState(true);
		return (
			<>
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={isLoading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
				<WrappedComponent { ...props} setLoading={setLoading} />
			</>
		)
	};
	return WithLoading;
};

export default withLoading;
