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
   
import AuthService from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

 const Profile = () => {

	// Get User Data
	const { data } = useQuery(QUERY_ME);
	console.log(data);
	const userData = data ? data.me : {};
	console.log(userData);

	return AuthService.loggedIn() ? (
		<div className="container profile-container">
			 <div className="col">
				 <div className="col-md-12 profile-pic-section">
					 <div className="d-flex flex-column align-items-center text-center p-3 py-5">
						 <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
						 <span className="font-weight-bold">{userData.firstName} {userData.lastName}</span>
						 <span className="text-black-50">{userData.email}</span>
					 </div>
				 </div>
				 <div className="col-md-12 profile-info-section">
						<div className="row">
							<h6 className="info-title">Username</h6>
							<h6 className="info-data">{userData.username}</h6>
						</div>
						<div className="row">
							<h6 className="info-title">Email</h6>
							<h6 className="info-data">{userData.email}</h6>
						</div>
						<div className="row">
							<h6 className="info-title">First Name</h6>
							<h6 className="info-data">{userData.firstName}</h6>
						</div>
						<div className="row">
							<h6 className="info-title">Last Name</h6>
							<h6 className="info-data">{userData.lastName}</h6>
						</div>
				 </div>
			 </div>
		 </div>
	) : (
		<h3>
			<span role="img" aria-label="shocked">
				😱
			</span>
			Oops, Sign up or Login to view this page!
		</h3>
	);

 };
 
 export default Profile;