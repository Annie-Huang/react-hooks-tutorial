import React, {useState} from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <form>
                <div>
                    <label>First name</label>
                    <input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        type="text"
                    />
                    <label>Last name</label>
                    <input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        type="text"
                    />
                </div>
            </form>
        </div>
    );
};

export default UserForm;
