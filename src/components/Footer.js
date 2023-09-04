import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>

        <footer>
          <div className="container grid grid-three-column">
            <div className="footer-about">
              <h2>Shopclue</h2>
              <p>
                "ShopClues: Affordable online shopping with a vast selection and
                unbeatable deals."
              </p>
            </div>
            <div className="footer-social">
              <h2>Follow Us</h2>
              <div className="footer-social--icons">
                <div>
                  <a href="https://github.com/uditpadhan98">
                    <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/yo_u_dit/">
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/youdit98">
                    <FaTwitter className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/udit-padhan-41481a222/">
                    <FaLinkedin className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h2>Call Us</h2>
              <p>+91 12345678978</p>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} shopclue-Technical. All Rights
                Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 5rem 0 5rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h2 {
      color: rgb(84 243 145);
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
