// pages/checkout.js
import { useState } from 'react';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function Checkout() {
  // Initialize Stripe with the publishable key
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  // Fonction CheckoutForm to handle the payment and return the form
  function CheckoutForm() {
    // Use the useStripe and useElements hooks to handle the payment
    const stripe = useStripe();
    const elements = useElements();

    // State variables
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');

    // Handle the form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setErrorMessage('');

      if (!stripe || !elements) {
        setErrorMessage("Stripe n'est pas encore chargé.");
        setLoading(false);
        return;
      }

      // Get the card number element
      const cardElement = elements.getElement(CardNumberElement);

      // Create a payment method with the card element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      // Handle any errors from creating a payment method
      if (error) {
        setErrorMessage(error.message);
      } else {
        alert('Paiement réussi !');
      }

      setLoading(false);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-check d-flex justify-content-between rounded-top border border-2 border-warning p-3 mb-0 mt-3">
          <label className="form-check-label ps-2 " htmlFor="flexRadioDefault1">
            <img
              src="/icons/credit-card.png"
              className="me-3 custom-icons-card"
              alt="Carte de crédit"
            />
            Carte de crédit
          </label>
          <input
            id="flexRadioDefault1"
            type="radio"
            name="paymentMethod"
            value="card"
            className="form-check-input me-2 radio-color  "
            checked={selectedPaymentMethod === 'card'}
            onChange={() => setSelectedPaymentMethod('card')}
          />
        </div>
        <div className="card mt-0 mb-3 rounded-top-0 border-top-0">
          <div className="p-2">
            {/* Card number */}
            <label htmlFor="cardNumber" className="form-label small m-0">
              Numéro de carte
            </label>
            <div className="container d-flex justify-content-start p-0">
              <img
                src="/icons/recto-card.png"
                className="custom-icons-recto-card me-2"
                alt="Icône carte recto"
              />
              <div
                id="cardNumber"
                className="form-control my-2 mt-0 custom-input-stripe"
              >
                <CardNumberElement
                  options={{
                    linkAuthentication: false,
                    placeholder: 'Indiquez votre numéro de carte',
                    style: {
                      base: {
                        fontSize: '14px',
                        color: '#495057',
                        '::placeholder': {
                          color: '#6c757d',
                        },
                      },
                      invalid: {
                        color: '#dc3545',
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Expiration date and CVC */}
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="cardExpiry" className="form-label small m-0">
                  Date d'expiration
                </label>
                <div
                  id="cardExpiry"
                  className="form-control my-2 mt-0 custom-input-stripe"
                >
                  <CardExpiryElement
                    options={{
                      style: {
                        base: {
                          fontSize: '14px',
                          color: '#495057',
                          '::placeholder': {
                            color: '#6c757d',
                          },
                        },
                        invalid: {
                          color: '#dc3545',
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cardCvc" className="form-label small m-0">
                  CVC/CVV
                </label>
                <div
                  id="cardCvc"
                  className="form-control my-2 mt-0 custom-input-stripe"
                >
                  <CardCvcElement
                    options={{
                      placeholder: '123',
                      style: {
                        base: {
                          fontSize: '14px',
                          color: '#495057',
                          '::placeholder': {
                            color: '#6c757d',
                          },
                        },
                        invalid: {
                          color: '#dc3545',
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="alert alert-danger" role="alert" aria-live="polite">
            {errorMessage}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-warning w-100 mt-2 text-white "
          disabled={!stripe || loading}
          aria-label="Payer en toute sécurité"
        >
          {loading ? (
            'Traitement…'
          ) : (
            <>
              <i className="bi bi-lock-fill"></i> Payer
            </>
          )}
        </button>
      </form>
    );
  }

  return (
    <div className="container-fluid bg-body-tertiary p-0">
      <nav className="navbar custom-border ">
        <div className="container ps-5 pe-5">
          <img
            src="/arche.png"
            className="custom-nav-img"
            alt="Logo de l'entreprise"
          />
          <p className="text-start mb-0">
            Panier <i className="bi bi-basket ms-2"></i>
          </p>
        </div>
      </nav>
      <div className="container-sm ">
        <div className="row">
          <div className=" bg-white col-lg-6 border-end">
            <section>
              <div className="mb-1 p-3">
                <h4 className="fw-bold m-0 fs-4">Contact</h4>
                <small className="text-muted" aria-hidden="true">
                  Entrez vos informations de contact
                </small>
                <br />
                <label
                  htmlFor="exampleFormControlInput1"
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
                    aria-describedby="emailMarketingDesc"
                  />
                  <label
                    className="form-check-label small "
                    htmlFor="emailMarketing"
                  >
                    J'accepte de recevoir des emails marketing
                  </label>
                </div>
              </div>
            </section>
            <section>
              <div className="mb-1 p-3 pt-0">
                <h4 className="fw-bold mb-0 fs-4">Adresse de Livraison</h4>
                <small className="text-muted d-block mb-3" aria-hidden="true">
                  Entrez votre adresse de livraison
                </small>
                <div className="row">
                  <div className="col-md-6">
                    <label
                      htmlFor="firstName"
                      className="form-label small m-0 mt-"
                    >
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
                    <label htmlFor="Name" className="form-label small m-0">
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
                <label htmlFor="address" className="form-label small m-0">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control my-2 mt-0"
                  placeholder="123 rue principale, Ville, Pays"
                />
                <label
                  htmlFor="complementaryAddress"
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
                <label htmlFor="country" className="form-label small m-0 mt-0">
                  Pays
                </label>
                <select id="country" className="form-select my-2 mt-0 pt-2 ">
                  <option>Sélectionnez un pays</option>
                </select>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label small m-0">
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
                    <label htmlFor="state" className="form-label small m-0">
                      État
                    </label>
                    <input
                      id="state"
                      type="text"
                      className="form-control my-2 mt-0"
                      placeholder="Indiquez votre état"
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="postalCode"
                      className="form-label small m-0"
                    >
                      Code Postal
                    </label>
                    <input
                      id="postalCode"
                      type="text"
                      className="form-control my-2 mt-0"
                      placeholder="Indiquez votre code Postal"
                    />
                  </div>
                </div>
                <label htmlFor="phone" className="form-label small m-0">
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
                  <label
                    className="form-check-label small "
                    htmlFor="billingAddress"
                  >
                    L'adresse de facturation est différente de l'adresse de
                    livraison
                  </label>
                </div>
              </div>
            </section>
            <section>
              <div className="mb-1 p-3 pt-0">
                <h4 className="fw-bold mb-0 fs-4">Méthode de Livraison</h4>
                <small className="text-muted" aria-hidden="true">
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
            </section>
            <section>
              <div className="mb-4 p-3">
                <h4 className="fw-bold mb-0 fs-4">Paiement</h4>
                <small className="text-muted" aria-hidden="true">
                  Sélectionnez votre méthode de paiement ci-dessous. Toutes les
                  transactions sont sécurisées et cryptées.
                </small>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
                <small
                  className="text-muted text-center d-block mt-2"
                  aria-hidden="true"
                >
                  <i class="bi bi-lock-fill"></i>
                  Toutes les transactions sont sécurisées et cryptées
                </small>
                <div className="container d-flex justify-content-center mt-3">
                  <img
                    src="/icons/visa.png"
                    className="custom-icons-payment"
                    alt="visa logo"
                  />
                  <img
                    src="/icons/mastercard.png"
                    className="ms-2 custom-icons-payment"
                    alt="mastercard logo"
                  />
                </div>
              </div>
            </section>
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
                  <span
                    className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-secondary"
                    aria-live="polite"
                  >
                    1<span className="visually-hidden">unread messages</span>
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
                  aria-label="Code de réduction"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  disabled
                  aria-disabled="true"
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

              {/* More informations */}
              <div className="d-flex justify-content-flex-start mb-2">
                <img
                  src="/icons/shield.png"
                  className="custom-icons"
                  alt="Service client"
                />
                <div>
                  <h6 className="fw-semibold mb-1 ms-2 ">Service Client</h6>
                  <p className="text-muted mb-2 small ms-2" aria-hidden="true">
                    Nous répondons à vos questions du lundi au vendredi de 9h à
                    18h.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-flex-start mb-2">
                <img
                  src="/icons/schedule.png"
                  className="custom-icons-schedule"
                  alt="Satisfait ou remboursé"
                />
                <div>
                  <h6 className="fw-semibold mb-1 ms-2">
                    Satisfait ou remboursé 30 jours
                  </h6>
                  <p className="text-muted mb-2 small ms-2" aria-hidden="true">
                    Insatisfait ? Remboursement facile et sans condition. Votre
                    satisfaction est notre priorité.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-flex-start mb-2">
                <img
                  src="/icons/truck.png"
                  className="custom-icons"
                  alt="Expédition rapide"
                />
                <div>
                  <h6 className="fw-semibold mb-1 ms-2">Expédition en 48h</h6>
                  <p className="text-muted mb-2 small ms-2" aria-hidden="true">
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
