import React from "react";

function Map(props) {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.8894621030495!2d4.863760175853133!3d52.31800827200886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a7132e983eb%3A0xaa1dc6c51926a5cd!2sBarbershop%20Just%20for%20Men!5e0!3m2!1sen!2snl!4v1716029773699!5m2!1sen!2snl";

    return (
        <div className={props.class}>
            <iframe
                src={mapSrc}
                width="600"
                height="490.93"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Map;
