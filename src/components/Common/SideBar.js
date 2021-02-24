import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets'


class SideBar extends Component {
    render(){
        return(
            <div className="fixed-left">
                 <div class="sideBarCard">
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
        )
    }
}
export default SideBar;