import React from "react";

const Button = ({message}) => {

    return (
        <div>
            <button className="button" >
                {message}
            </button>
        </div>
    );
};

export default Button;
