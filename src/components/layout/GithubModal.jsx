import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

function GithubModal({ show, handleClose }) {
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    modalInstance.current = new Modal(modalRef.current);
  }, []);

  useEffect(() => {
    if (!modalInstance.current) return;

    if (show) {
      modalInstance.current.show();
    } else {
      modalInstance.current.hide();
    }
  }, [show]);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body">
            <p><strong>Nom :</strong> John Doe</p>
            <p><strong>Repositories :</strong> 1</p>
            <p><strong>Followers :</strong> 16</p>
            <p><strong>Following :</strong> 0</p>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubModal;
