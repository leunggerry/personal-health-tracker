/**
 * Components to add
 *  - ProfilePicture
 *  - UserInfo
 */
 import React from 'react';
 import {
	 Editable,
	 EditableInput,
	 EditableTextarea,
	 EditablePreview,
   } from '@chakra-ui/react'
   
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

 const Profile = () => {

	// Get User Data
	const { data } = useQuery(QUERY_ME);
	console.log(data);
	const userData = data ? data.me : {};
	console.log(userData);

	function myFunc() {
		console.log("CHANGED");
	}

	 return (
		 <div className="container">
			 <div className="row">
				 <div className="col-md-4 profile-pic-section">
					 <div className="d-flex flex-column align-items-center text-center p-3 py-5">
						 <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
						 <span className="font-weight-bold">KennethValdez</span>
						 <span className="text-black-50">edogaru@mail.com.my</span>
					 </div>
				 </div>
				 <div className="col-md-8 profile-info-section">
					 <div className="card mb-3 profile-info-card">
						 <div className="card-body">
							 <div className="row">
								 <div className="col-sm-3">
									 <h6 className="mb-0">Username</h6>
								 </div>
								 <div className="col-sm-9 text-secondary">
									<Editable 
										defaultValue='{"USERNAME"}'
										>
									 <EditablePreview />
										<EditableInput onChange={() => myFunc()}/>
									</Editable>
							 	 </div>
							 </div>
							 <div className="row">
								 <div className="col-sm-3">
									 <h6 className="mb-0">Email</h6>
								 </div>
								 <div className="col-sm-9 text-secondary">
								 <Editable defaultValue='edogaru@mail.com.my'>
										<EditablePreview />
										<EditableInput />
									</Editable>
								 </div>
							 </div>
							 <div className="row">
								 <div className="col-sm-3">
									 <h6 className="mb-0">Weight</h6>
								 </div>
								 <div className="col-sm-9 text-secondary">
								 <Editable defaultValue='160lbs'>
										<EditablePreview />
										<EditableInput />
									</Editable>
								 </div>
							 </div>
							 <div className="row">
								 <div className="col-sm-3">
									 <h6 className="mb-0">Height</h6>
								 </div>
								 <div className="col-sm-9 text-secondary">
								 <Editable defaultValue='175cm'>
										<EditablePreview />
										<EditableInput />
									</Editable>
								 </div>
							 </div>
							 <div className="row">
								 <div className="col-sm-3">
									 <h6 className="mb-0">City</h6>
								 </div>
								 <div className="col-sm-9 text-secondary">
								 	<Editable defaultValue='Ottawa, ON'>
										<EditablePreview />
										<EditableInput />
									</Editable>
								 </div>
							 </div>
						 </div>
					 </div>
				 </div>
			 </div>
		 </div>
	 );
 };
 
 export default Profile;