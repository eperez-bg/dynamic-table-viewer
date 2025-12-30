import React, { useState } from "react";

const CapCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        console.log("changed", e.target.checked);
        setIsChecked(e.target.checked);
    };

    return (
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                style={{position:"relative", zIndex:2}}
            />
    );
};

export default CapCheckbox;