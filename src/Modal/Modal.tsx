import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalComponent: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [DataUser, setDataUser] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  return (
    <>
      {isOpen && (
        <>
          <div
            className="modal fade show"
            tabIndex={-1}
            style={{ display: "block" }}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Enregistrement
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body row">
                  <div className="my-2" style={{ width: "300px" }}>
                    <InputText
                      type="text"
                      className="form-control mb-2"
                      placeholder="Email ou Username"
                      value={DataUser.email}
                      onChange={(e) =>
                        setDataUser({ ...DataUser, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="my-2" style={{ width: "300px" }}>
                    <Password
                      value={DataUser.password}
                      placeholder="Password"
                      feedback={true}
                      toggleMask
                      onChange={(e) =>
                        setDataUser({ ...DataUser, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-2" style={{ width: "300px" }}>
                    <Password
                      value={DataUser.confirmationPassword}
                      placeholder="Confirmation Password"
                      feedback
                      toggleMask
                      onChange={(e) =>
                        setDataUser({
                          ...DataUser,
                          confirmationPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default ModalComponent;
