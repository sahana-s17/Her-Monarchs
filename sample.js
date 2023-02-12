import React, { useState } from 'react';

const MonarchForm = () => {
    const [sighting, setSighting] = useState({
        date: '',
        location: '',
        sighted: 'no'
    });

    const handleInputChange = event => {
        setSighting({
            ...sighting,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Code to send the data to the database would go here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input
                    type="text"
                    name="date"
                    value={sighting.date}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Location:
                <input
                    type="text"
                    name="location"
                    value={sighting.location}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Sighted:
                <select
                    name="sighted"
                    value={sighting.sighted}
                    onChange={handleInputChange}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MonarchForm;