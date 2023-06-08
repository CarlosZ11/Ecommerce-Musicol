import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Contáctanos</h5>
            <a href="https://wa.me/573008449383" target="_blank" rel="noopener noreferrer">
              <p>3008449383</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Nuestra tienda</h5>
            {/* <p>Calle 14 N°21-55 Valledupar Cesar</p> */}
            <a href="https://goo.gl/maps/D87c3soH33Hvmeo7A" target="_blank" rel="noopener noreferrer">
              <p>Calle 14 N°21-55 Valledupar Cesar</p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-envelope"></i>
            </div>
            <h5>Gmail</h5>
            <p>musicol.col@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
