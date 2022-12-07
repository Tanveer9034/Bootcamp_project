import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Danzoo-Service',
	description: 'We offer the best services in Pakistan',
	keywords: 'Home Services,Plumber Services, Electicity Services',
};

export default Meta;
