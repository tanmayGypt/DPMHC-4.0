import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div style={{ height: "450px" }} className=" mx-4 my-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6188882122124!2d77.09889857644094!3d28.701044980964436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04008a1dcee5%3A0x614dc35a9374b7d8!2sDP%20MEMORIAL%20HOMOEOPATHY%20CLINIC!5e0!3m2!1sen!2sin!4v1726496113427!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
