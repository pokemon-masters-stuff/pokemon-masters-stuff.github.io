import React from 'react';
import { useSelector } from 'react-redux';
import UI from '../../utils/translations';

export default function ContributeModal() {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const language = useSelector((state) => state.language.currentLanguage);

  return (
    <div
      className="modal fade"
      id="contributeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div
          className={`modal-content ${darkMode ? 'text-white bg-dark' : null}`}
        >
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              {UI['Contribute Title'][language]}
            </h4>
          </div>
          <div
            className="modal-body mx-3"
            style={{
              display: 'inline-block',
              wordBreak: 'break-word',
              whiteSpace: 'pre-line',
              paddingRight: 10,
            }}
          >
            Hi everyone. As you know some grids look kind of messy right now due
            to skill names spilling out over the edge of the hexagons. I want to
            make the grids more legible and I really need your help.
            <br />
            <br />
            For each language I've complied a list of skill names to be
            abbreviated. Please check them out and update them if you have time.
            Every little bit helps. Thank you.
            <br />
            <br />
            <ul>
              <li>
                <a
                  href="https://docs.google.com/document/d/1cbqSZfYxr-xEoC39mBWl3JD81Cgztq2OVVtQs0zSjpw/edit?usp=sharing"
                  target="_blank"
                >
                  German
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/19Vkn5ZVHSdwQmTiZTUs2W2cQTX3SbCjBmcmkKhBguoM/edit?usp=sharing"
                  target="_blank"
                >
                  French
                </a>
              </li>

              <li>
                <a
                  href="https://docs.google.com/document/d/1MORNFg9_ILZxQGNOtvuiQHeBQ1bZWiGasjDgU_Emefc/edit?usp=sharing"
                  target="_blank"
                >
                  Japanese
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1foljTMI6yFMaYx4PuJSPoaEpgTImAzr2eFg9W5W3Ktw/edit?usp=sharing"
                  target="_blank"
                >
                  Korean
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1MLDIZ16iI9CxP2_U4J4blzJHkiFySCs3nptAY4JthcI/edit?usp=sharing"
                  target="_blank"
                >
                  Traditional Chinese
                </a>
              </li>
              <li>Italian (Completed by Jo)</li>
              <li>Spanish (Completed by Felipow and Zinfogel)</li>
            </ul>
          </div>
          {/* <div className="modal-footer d-flex justify-content-center">
            <a
              href="https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing"
              target="_blank"
            >
              Open link in new tab
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
