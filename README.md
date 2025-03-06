# Checkout Page with Stripe Integration

This project is built using **Next.js**, **React**, **Bootstrap**, and **Stripe API**. It aims to create a **checkout page** that is faithful to the original example, which is a payment form designed to allow users to complete their purchases securely.

## Features

- **React** for UI components
- **Next.js** for server-side rendering
- **Bootstrap** for responsive layout
- **Stripe API** for handling payments

Working on Node.js 20.11

## Getting Started

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone [git@github.com:alyweb66/test.git](https://github.com/alyweb66/test.git)
```

Or download ZIP file.

### 2. Install Dependencies

Once the repository is cloned, navigate to the project folder and install the required dependencies using npm or other:

```bash
npm install
```

### 3. Set up Environment Variables

The project requires environment variables to connect to **Stripe**. Follow these steps to set it up:

1. **Create a `.env.local` file** in the root directory of the project.
2. **Copy the contents** from the `.env.example` file into your `.env.local` file.

#### Important

- **Create a Stripe account** on [Stripe](https://stripe.com) if you don't have one yet.
- After signing up, go to your **Stripe Dashboard** and retrieve your **Publishable Key**.
- **Paste your Publishable Key** into the `.env.local` file to enable Stripe functionality.

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 4. Run the Application

After the dependencies are installed and the environment variables are set up, **start the application** by running the following command:

```bash
npm run dev
```

The application will be available at [http://localhost:3000/checkout](http://localhost:3000/checkout) by default.

## Testing Payments

To test the payment functionality locally:

- Ensure you have the .env.local file set up as mentioned above.

- Use Stripe's test card numbers to simulate payments. For example, the following test card simulates a successful payment:
  - **Card Number:** '4242 4242 4242 4242'
  - **Expiration Date:** Any future date ('12/26')
  - **CVC: Any 3 digits** ('123')

Once the payment is processed, a confirmation message will appear within the application.
