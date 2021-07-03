import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1> Annoucement!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>Hello stranger! do you wish to build a network and collaborate on awesome projects?? </h3>
                    <p>Connect with me on Linkedin and lets share our ideas and collaborate to create great projects!!!</p>
                    
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='www.linkedin.com/in/siddharthsharma07'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-blue'
                    >
                        Linkedin
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;