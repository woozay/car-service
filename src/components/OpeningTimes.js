import React from 'react';
import { FaPhone, FaRegBuilding, FaRegUser, FaHome } from 'react-icons/fa';

import useSiteMetadata from './SiteMetadata';

export default () => {
    const { monFriOpening, monFriClosing, satOpening, satClosing } = useSiteMetadata();

    return <>
        <div class="columns">
            <div className="column is-half p-b-xxs">Mon - Fri</div>
            <div className="column is-half p-b-xxs">{monFriOpening} - {monFriClosing}</div>
        </div>
        <div class="columns">
            <div className="column is-half p-b-xxs">Sat</div>
            <div className="column is-half p-b-xxs">{satOpening} - {satClosing}</div>
        </div>
        <div class="columns">
            <div className="column is-half p-b-xxs">Sun</div>
            <div className="column is-half p-b-xxs">By Appointment Only</div>
        </div>
    </>


}