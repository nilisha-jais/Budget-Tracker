import React, { useContext, useState } from 'react';
import { AppContext, AppProvider } from './AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';
const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] =useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-primary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;