import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Necesitas ayuda?</h2>
              <p>Registrate gratis y resuelve tus inquietudes.</p>
              <form className="form-section">
                <input placeholder="Tu correo electrónico" name="email" type="email" />
                <input value="Si. deseo!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
