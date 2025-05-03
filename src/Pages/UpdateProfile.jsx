import React, { useState } from 'react';
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';
import { auth } from '../firebase.init';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        if (!auth.currentUser) {
            Swal.fire({
                icon: "error",
                title: "No User Found",
                text: "Please log in first to update your profile!",
            });
            return;
        }

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL
            });

            Swal.fire({
                icon: "success",
                title: "Profile Updated",
                text: "Your name and photo have been successfully updated!",
            });

            // Clear form after update
            setName('');
            setPhotoURL('');

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: error.message,
            });
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Update Profile</h1>
                        <div className="form-control">
                            <label className="label">New Name</label>
                            <input 
                                type="text" 
                                className="input input-bordered" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your new name"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">New Photo URL</label>
                            <input 
                                type="url" 
                                className="input input-bordered" 
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                placeholder="Enter new photo URL"
                                required
                            />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-neutral">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
