import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import marioAvatar from "../../assets/images/super-mario.png";

function GithubModal({ show, handleClose }) {
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  // Initialisation unique du modal
  useEffect(() => {
    if (!modalRef.current) return;

    modalInstance.current = new Modal(modalRef.current);

    return () => {
      modalInstance.current?.dispose();
    };
  }, []);

  // Gestion ouverture / fermeture
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
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">

          {/* HEADER */}
          <div className="modal-header border-bottom">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleClose}
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body">
            <div className="d-flex align-items-stretch gap-5">

              {/* Colonne Avatar */}
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minWidth: "220px" }}
              >
                <img
                  src={marioAvatar}
                  alt="Avatar"
                  className="img-fluid"
                  style={{
                    height: "75%",
                    maxHeight: "320px",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* Colonne Infos */}
              <div className="flex-grow-1">

                <div className="border-bottom pb-2 mb-3">
                  <p className="mb-0">
                    <strong>Nom :</strong> John Doe
                  </p>
                </div>

                <div className="border-bottom pb-2 mb-3">
                  <p className="mb-0">
                    <i className="bi bi-geo-alt me-2"></i>
                    Unknown
                  </p>
                </div>

                <div className="border-bottom pb-3 mb-3">
                  <p className="mb-0">
                    <i className="bi bi-card-text me-2"></i>
                    As we all know, John Doe's identity is unknown.
                    I just wanted to contribute without being known.
                  </p>
                </div>

                <div className="border-bottom pb-2 mb-3">
                  <p className="mb-0">
                    <strong>Repositories :</strong> 1
                  </p>
                </div>

                <div className="border-bottom pb-2 mb-3">
                  <p className="mb-0">
                    <strong>Followers :</strong> 16
                  </p>
                </div>

                <div>
                  <p className="mb-0">
                    <strong>Following :</strong> 0
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* FOOTER */}
          <div className="modal-footer border-top">
            <button
              type="button"
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
