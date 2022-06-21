import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import Image from '../../assets/img/kelsey_hamble.jpg'

const SideBar = () => {
    return(
        <div className="fixed-left">
                <div className="sideBarCard">
                    <div className="profile">
                    <div className="profilePic">
                        <img className="rounded-circle smallImageBox img-fluid" src={Image} alt="Kelsey and Hamble"></img>
                    </div>
                    <div className="text-center">
                        <h3 className="section-heading">Kelsey Sheridan</h3>
                    </div>
                    </div>
                    <div className="twitter">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'kelsi0'
                        }}
                        options={{
                            width:'auto', height:'80vh'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
export default SideBar;