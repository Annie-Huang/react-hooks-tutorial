import React, {useState} from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <form>
                <div>
                    <label>First name</label>
                    <input type="text" />
                    <label>Last name</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
};

export default UserForm;
