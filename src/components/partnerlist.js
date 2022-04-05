import React from "react";
import PartnerItem from "./partnerItem";


const PartnerList = props => {
    console.log(props)


    return (
        <div className="ui divided items">
            
               {props.partners.map((partner)=>
                   <PartnerItem partnerdata = {partner}/>
               ).sort()}
            
        </div>
    );
}
export default PartnerList