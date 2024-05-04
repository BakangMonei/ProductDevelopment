import React, {useState} from "react";
import {connect} from "react-redux";



const CheckBoxTwo = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <label>Show Passwords</label>
        </div>
    );
};

export default CheckBoxTwo;