import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props) => {
	const closeHandle = () => {
		props.onClose(false);
	};
	return <div className={styles.backdrop} onClick={closeHandle}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				document.getElementById('modal-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				document.getElementById('modal-root')
			)}
		</>
	);
};

export default Modal;
