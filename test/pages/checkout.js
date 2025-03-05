// pages/checkout.js
export default function Checkout() {
  return (
    <div className="container-fluid bg-body-tertiary p-0">
      <nav className="navbar custom-border ">
        <div className="container">
          <img src="/arche.png" className="custom-nav-img"></img>
          <p className="text-start mb-0">
            Panier <i className="bi bi-basket ms-2"></i>
          </p>
        </div>
      </nav>
      <div className="container-sm ">
        <div className="row">
          <div className=" bg-white col-lg-6 border-end">
            <div className="mb-1 p-3">
              <h4 className="fw-bold m-0 fs-4">Contact</h4>
              <small className="text-muted">
                Entrez vos informations de contact
              </small>
              <br />
              <label
                for="exampleFormControlInput1"
                className="form-label small m-0 mt-3"
              >
                Email
              </label>
              <input
                type="email"
                id="exampleFormControlInput1"
                className="form-control"
                placeholder="Indiquez votre email"
              />
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input custom-checkbox"
                  id="emailMarketing"
                />
                <label className="form-check-label small " for="emailMarketing">
                  J'accepte de recevoir des emails marketing
                </label>
              </div>
            </div>

            <div className="mb-1 p-3 pt-0">
              <h5 className="fw-bold mb-0 fs-4">Adresse de Livraison</h5>
              <small className="text-muted d-block mb-3">
                Entrez votre adresse de livraison
              </small>
              <div className="row">
                <div className="col-md-6">
                  <label for="firstName" className="form-label small m-0 mt-">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control my-2 mt-0"
                    placeholder="Indiquez votre prénom"
                  />
                </div>
                <div className="col-md-6">
                  <label for="Name" className="form-label small m-0">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="Name"
                    className="form-control my-2 mt-0"
                    placeholder="Indiquez votre nom"
                  />
                </div>
              </div>
              <label for="address" className="form-label small m-0">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                className="form-control my-2 mt-0"
                placeholder="123 rue principale, Ville, Pays"
              />
              <label
                for="complementaryAddress"
                className="form-label small m-0"
              >
                Adresse complémentaire (optionnel)
              </label>
              <input
                type="text"
                id="complementaryAddress"
                className="form-control my-2 mt-0"
                placeholder="Adresse complémentaire"
              />
              <label
                for="country"
                className="form-label small m-0 mt-0"
              >
                Pays
              </label>
              <select
              id="country" 
              className="form-select my-2 mt-0 pt-2 "
              >
                <option>Sélectionnez un pays</option>
              </select>
              <div className="row">
                <div className="col-md-4">
                  <label for="city" className="form-label small m-0">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="form-control my-2 mt-0"
                    placeholder="Indiquez votre ville"
                  />
                </div>
                <div className="col-md-4">
                  <label for="city" className="form-label small m-0">
                    État
                  </label>
                  <input
                    type="text"
                    className="form-control my-2 mt-0"
                    placeholder="Indiquez votre état"
                  />
                </div>
                <div className="col-md-4">
                  <label for="city" className="form-label small m-0">
                    Code Postal
                  </label>
                  <input
                    type="text"
                    className="form-control my-2 mt-0"
                    placeholder="Indiquez votre code Postal"
                  />
                </div>
              </div>
              <label for="phone" className="form-label small m-0">
                Téléphone
              </label>
              <input
                type="number"
                id="phone"
                className="form-control mt-0"
                placeholder="Indiquez votre numéro de téléphone"
              />
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input custom-checkbox"
                  id="billingAddress"
                />
                <label className="form-check-label small " for="billingAddress">
                  L'adresse de facturation est différente de l'adresse de
                  livraison
                </label>
              </div>
            </div>
            <div className="mb-1 p-3 pt-0">
              <h5 className="fw-bold mb-0 fs-4">Méthode de Livraison</h5>
              <small className="text-muted">
                Sélectionnez votre méthode de livraison ci-dessous
              </small>
              <div className="card p-2 mt-3 mb-0 bg-light border-0">
                <h6 className="fw-bold mb-1 small">Information</h6>
                <p className="fw-bold mb-0 small">
                  Sélectionnez un pays pour voir les méthodes d'expédition
                  disponibles
                </p>
              </div>
            </div>
            <div className="mb-4 p-3">
              <h5 className="fw-bold mb-0 fs-4">Paiement</h5>
              <small className="text-muted">
                Sélectionnez votre méthode de paiement ci-dessous. Toutes les
                transactions sont sécurisées et cryptées.
              </small>
              <div className="form-check d-flex justify-content-between rounded-top border border-2 border-warning p-3 mb-0">
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
                <input
                  id="flexRadioDefault1"
                  type="radio"
                  className="form-check-input "
                />
              </div>
              <div className="card mt-0 mb-3 rounded-top-0 border-top-0">
                <div className="p-2">
                  <label for="cardNumber" className="form-label small m-0">
                    Numéro de carte
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control my-2 mt-0"
                    placeholder="Indiquez votre numéro de carte"
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <label for="expDate" className="form-label small m-0">
                        Date d'exp.
                      </label>
                      <input
                        type="text"
                        id="expDate"
                        className="form-control my-2 mt-0"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="city" className="form-label small m-0">
                        CVC/CVV
                      </label>
                      <input
                        type="number"
                        className="form-control my-2 mt-0"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-warning w-100 mt-2">Payer</button>
            </div>
          </div>

          {/* right column / your order */}
          <div className="col-lg-6 order-lg-2 order-1 mb-4">
            <div className=" p-3">
              <h5 className="fw-bold mb-3 fs-4">Votre commande</h5>
              <div className="d-flex align-items-start">
                <div className="position-relative me-2">
                  <img
                    src="/tower.png"
                    className="custom-article-img"
                    alt="Produit"
                  />
                  <span class="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-secondary">
                    1
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
                <div>
                  <p className="mb-0 fw-semibold fs-5">
                    Montessori Multi-Usage Observation Tower
                  </p>
                  <small className="text-muted">Default Title</small>
                </div>
                <span className="ms-auto fw-bold fs-5">€39.90</span>
              </div>
              <hr />
              <div className="mb-3 d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Code de réduction"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  disabled
                >
                  Appliquer
                </button>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted fw-semibold">
                  Sous-total - 1 Items
                </span>
                <span className="fw-semibold">€39.90</span>
              </div>
              <div className="d-flex justify-content-between mb-2 mt-2">
                <span className="text-muted">Livraison</span>
                <span>-</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Taxes estimées</span>
                <span>€0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-4">Total</span>
                <span className="fw-bold fs-4">€39.90</span>
              </div>

              {/* Informations supplémentaires */}
              <div className="d-flex justify-content-flex-start mb-2">
                <img src="/icons/shield.png" className="custom-icons" />
                <div>
                  <h6 className="fw-semibold mb-1 ms-2 ">Service Client</h6>
                  <p className="text-muted mb-2 small ms-2">
                    Nous répondons à vos questions du lundi au vendredi de 9h à
                    18h.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-flex-start mb-2">
                <img
                  src="/icons/schedule.png"
                  className="custom-icons-schedule"
                />
                <div>
                  <h6 className="fw-semibold mb-1 ms-2">
                    Satisfait ou remboursé 30 jours
                  </h6>
                  <p className="text-muted mb-2 small ms-2">
                    Insatisfait ? Remboursement facile et sans condition. Votre
                    satisfaction est notre priorité.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-flex-start mb-2">
                <img src="/icons/truck.png" className="custom-icons" />
                <div>
                  <h6 className="fw-semibold mb-1 ms-2">Expédition en 48h</h6>
                  <p className="text-muted mb-2 small ms-2">
                    Bénéficiez d'une expédition ultra-rapide avec suivi en
                    seulement 48 heures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
