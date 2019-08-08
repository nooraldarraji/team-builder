import React from 'react';

// Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination)
function Form({ member, handleChange, handleSubmit, saveArray }) {
    return (
        <div className='form-container'>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name: <br /> <input type="text" name="name" value={member.name} onChange={event => handleChange(event)} />
                </label>
                <label> <br />
                    Email: <br /> <input type="text" name="email" value={member.email} onChange={event => handleChange(event)} />
                </label>
                <label> <br />
                    Role: <br /> <input type="text" name="role" placeholder="" value={member.role} onChange={event => handleChange(event)} />
                </label> <br /> <br />
                <button onClick={saveArray}>Submit</button>
            </form>
        </div >
    );
}

export default Form; 