import React from 'react'
import RegistrationPage from './RegistrationPage'

describe('<RegistrationPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RegistrationPage />)
  })
})