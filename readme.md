# Mainframe

Mainframe is a lightweight REST API built with NodeJS that is designed to make interaction with SWGEMu Core3 based MySQL servers easier than ever. Want to integrate your existing application's accounts with SWGEmu? Interested in building a quick sign up with no complex logic? Simple! Just deploy Mainframe and call the API endpoints using any HTTP API.

If you are interested in a standalone account management system or are unsure of how to use Mainframe, check out [Citadel](https://github.com/czerkacorp/citadel), one of our other flagship applications.

## System requirements

Node v11.0.0 (specified in .nvmrc file)

## Starting a development server

- Ensure that your MySQL dataabse is set up, running, and has a user that Mainframe can utilize

- Clone repository from Github

```bash
git clone https://github.com/czerkacorp/mainframe.git
```

- Install dependencies

```bash
npm install
```

- Set Mainframe Configs

  - Save [environment].js.example as development.js and update values for your MySQL database

- Start Mainframe

```bash
npm start
```

## Contributing

If you would like to contribute towards Mainframe's development, please follow these steps:

- Fork the Mainframe repository on Github
- Make your changes, commit and push to your fork's master
- Open a pull request against the Mainframe repository

## Other

If you have any feature requests, questions or concerns, please open an issue in the Mainframe repository.
