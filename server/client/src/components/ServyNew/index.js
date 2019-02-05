import React, { useState } from 'react';
import { reduxForm } from 'redux-form';

import ServyForm from '../ServyForm';
import ServyReview from '../ServyReview';

import './index.css';

const ServyNew = _ => {
	const [review, setReview] = useState(false);
	const toggleReview = _ => setReview(!review);

	const renderContent = review
		 	? <ServyReview handleReview={toggleReview} />
		  : <ServyForm handleReview={toggleReview} />;

	return <div className="servy-new">{renderContent}</div>;
};

export default reduxForm({
	form: 'servyForm'
})(ServyNew);
