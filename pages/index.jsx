import { useState } from "react";
import styled from "styled-components";
import { Routes } from "@config/routes";
import ContactModal from "./contactModal";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  const [show, setShow] = useState(false);

  const handleModalClick = () => {
    setShow(true);
  };
  const handleCloseContact = () => {
    setShow(false);
  };
  const handleOpenContact = () => {
    setShow(false);
  };

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}

        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <ul className="nav-bar__items">
          <li className="nav-bar__item">
            <a className="nav-bar__item--link" href={Routes.home}>
              Home
            </a>
          </li>
          <li className="nav-bar__item">
            <a className="nav-bar__item--link" href={Routes.products}>
              Products
            </a>
          </li>
          <li className="nav-bar__item">
            <a className="nav-bar__item--link" href={Routes.documentation}>
              Documentation
            </a>
          </li>
          <li className="nav-bar__item">
            <a className="nav-bar__item--link" href={Routes.pricing}>
              Pricing
            </a>
          </li>
        </ul>
        <a className="nav-bar__btn" href={Routes.projects}>
          Open Dashboard
        </a>
      </Header>
      <ContactModal
        show={show}
        handleCloseContact={handleCloseContact}
        handleOpenContact={handleOpenContact}
      />
      ;
      <ContactButton onClick={handleModalClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
