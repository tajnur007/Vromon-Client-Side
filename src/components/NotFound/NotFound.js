import React from 'react';
import './NotFound.css';
import Button from '@restart/ui/esm/Button';
import { useHistory } from 'react-router';
import image404 from '../../resources/images/404.gif';

const NotFound = () => {
    const history = useHistory();

    const handleReturnHome = () => {
        history.push("/");
    }

    return (
        <div>
            <div> <img id="image-404" src={image404} alt="" /> </div>
            <h2 className="pb-3">Sorry, we can't find the page that you're looking for</h2>
            <div className="pb-5">
                <Button className="custom-btn" onClick={handleReturnHome}>RETURN HOME</Button>
            </div>
        </div>
    );
};

export default NotFound;