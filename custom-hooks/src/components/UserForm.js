import React from 'react';
import useInput from "../hooks/useInput";

const UserForm = () => {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
    };

    // Very smart way to do binding. I never thought of doing it like this before.
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    {/*<input*/}
                    {/*    value={firstName}*/}
                    {/*    onChange={e => setFirstName(e.target.value)}*/}
                    {/*    type="text"*/}
                    {/*/>*/}
                    <input
                        {...bindFirstName}
                        type="text"
                    />
                    <label>Last name</label>
                    {/*<input*/}
                    {/*    value={lastName}*/}
                    {/*    onChange={e => setLastName(e.target.value)}*/}
                    {/*    type="text"*/}
                    {/*/>*/}
                    <input
                        {...bindLastName}
                        type="text"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
