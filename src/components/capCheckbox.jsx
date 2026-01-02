import React, { useState } from "react";

const CapCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
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