import React from 'react';
import { Link } from 'react-router-dom';

const TermsandCondiotions = () => {
    return (
        <div>
            
            <h3>Here  is our
                 terms and condition.</h3>
            <p>Go back To 

            <Link to='/register'>Registration</Link>
            </p>
        </div>
    );
};

export default TermsandCondiotions;