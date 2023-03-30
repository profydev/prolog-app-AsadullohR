import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactModal = (props: {
  handleCloseContact: MouseEventHandler<HTMLDivElement> | undefined;
  show: any;
}) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="contact-modal" onClick={props.handleCloseContact}>
      <div
        className="contact-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-modal__header">
          <div className="contact-modal__header-icon">
            <FontAwesomeIcon
              className="modal-envelope"
              icon={faEnvelope}
              size="3x"
              beat
            />
          </div>
        </div>
        <div className="contact-modal__body">
          <h4>Contact Us Via Email</h4>
          <p>
            Any questions? Send us an email at prolog@profy.dev. We usually
            answer within 24 hours.
          </p>
        </div>
        <div className="contact-modal__footer">
          <div
            className="contact-modal__footer-btn contact-modal__footer-cancel"
            onClick={props.handleCloseContact}
          >
            Cancel
          </div>
          <a
            className="contact-modal__footer-btn contact-modal__footer-open"
            href={"mailto:asad.rahimiy@gmail.com"}
          >
            Open Email App
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
