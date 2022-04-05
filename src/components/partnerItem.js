import React from "react";


const PartnerItem = props => {
    console.log('==== item ===', props);
    return (
        <div className="item">
                <div className="content">
                    <a className="header" href="/">{props.partnerdata.company}</a>
                    <div className="meta">
                        <span>Address</span>
                    </div>
                    <div className="description">
                        <p>{props.partnerdata.address}</p>
                    </div>
                    <div className="extra">
                        The office is in range of {props.partnerdata.range} km
                        <div className="ui right floated primary button">
                        Call Partner
                        <i className="right phone square icon"></i>
                        </div>
                        <div className="ui right floated primary button">
                        Send Email
                        <i className="chevron right icon"></i>
                        </div>
                        <div className="ui right floated primary button">
                        Directions
                        <i className="map marker alternate right icon"></i>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default PartnerItem;