import React from 'react'
import SidebarRow from './Sidebarow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
function Sidebar(props) {
    
    return (
        <div>
            <SidebarRow title = {props.data.displayName} src={props.data.photoURL} />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon}/>
            <SidebarRow title="Pages" Icon={FlagIcon}/>
            <SidebarRow title="Friends" Icon={SupervisedUserCircleIcon}/>
            <SidebarRow title="Messenger" Icon={ChatIcon}/>
            <SidebarRow title="Marketplace" Icon={StorefrontIcon}/>
            <SidebarRow title="Videos" Icon={VideogameAssetIcon}/>
        </div>
    )
}

export default Sidebar
