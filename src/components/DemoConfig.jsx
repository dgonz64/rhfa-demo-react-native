import React from 'react'

import {
  createSchema,
  addTranslations,
} from 'rhfa-react-native'

import { Autoform } from './Autoform'

addTranslations({
  models: {
    config: {
      arrayMode: {
        _field: 'Array mode',
        table: 'Table',
        panel: 'Panels'
      }
    }
  }
})

const configSchema = createSchema('config', {
  arrayMode: {
    type: 'radios',
    options: ['table', 'panel']
  }
})

export const DemoConfig = ({
  onSubmit,
  config,

  // Passing children to sneak a submit button
  children
}) =>
  <Autoform
    schema={configSchema}
    onSubmit={onSubmit}
    config={config}
    initialValues={config}
    submitButton
    submitButtonText="Update"
  >
    {children}
  </Autoform>
