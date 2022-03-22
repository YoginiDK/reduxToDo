import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import DatePicker from "react-datepicker";
import { MultiSelect } from "react-multi-select-component";
import "react-datepicker/dist/react-datepicker.css";
import { showSnack, dismissSnack } from 'react-redux-snackbar';
 

const options = [
	{ label: "Completed", value: "completed" },
	{ label: "In Process", value: "process" },
	{ label: "Pending", value: "pending" },
  ];

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const [startDate, setStartDate] = useState(new Date());

	const [selected, setSelected] = useState([]);


	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		if(value===undefined || value===null || value===''){
			console.log('user entered value is not defined');
			dispatch(showSnack('myUniqueId', {
				label: 'Enter Task Name',
				timeout: 2000,
				button: { label: 'OK' }
			}));
		}
		else{
			 
		dispatch(dismissSnack('myUniqueId'));
			dispatch(addTodo({
				title: value,
			}))
		}
		
	};

	

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Task Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Enter Task Name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<label className='sr-only'>Date</label>
			
			<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
			
			<div>
			<label className='sr-only'>Select Status</label>
			
				<MultiSelect
					options={options}
					value={selected}
					onChange={setSelected}
					labelledBy="Select"
				/>
			</div>


			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
