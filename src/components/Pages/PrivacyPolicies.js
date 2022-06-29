import React from "react";
import { html } from './PrivacyPolicy';

const PrivacyPolicies = () => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
    )
}

export default PrivacyPolicies;