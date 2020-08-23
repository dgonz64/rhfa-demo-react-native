import React, { useRef } from 'react'
import {
  createSchema,
  addTranslations,
  translatable,
  tr
} from 'rhfa-react-native'
import { Button, Alert } from 'react-native'
import { Autoform } from './Autoform'

addTranslations({
  models: {
    owner: {
      name: 'Owner\'s name',
      height: {
        _field: 'Height',
        tall: 'Tall',
        short: 'Short',
      },
      usesHat: 'Wears hat',
      armLength: {
        _field: 'Arm length',
        _labelInfo: '(in meters)'
      },
      pets: 'Owned pets',
    },
    pet: {
      name: 'Pet\'s name',
      heads: 'Number of heads',
      type: {
        _field: 'Kind',
        dog: 'Dog',
        cat: 'Cat'
      },
      hair: {
        _field: 'Hair color',
        _default: 'Select hair color...',
        blue: 'Blue',
        yellow: 'Yellow'
      }
    }
  },
  add: 'Add',
  notall: 'Only short people are allowed to have pets',
  submit: 'Submit'
})

export const DemoForm = ({ schema, config }) => {
  const formRef = useRef()
  function handleImperativeSubmit() {
    formRef.current.submit()
  }

  function handleSubmit(doc) {
    Alert.alert(
      'Doc',
      JSON.stringify(doc, null, '\t')
    )

    formRef.current.reset()
  }

  function handleEffect({ register }) {
    register('arrayMode')
  }

  return (
    <>
      <Autoform
        schema={schema}
        destroyOnUnmount={false}
        config={config}
        ref={formRef}
        onSubmit={handleSubmit}
        onEffect={handleEffect}
      />
      <Button
        title={tr('submit')}
        onPress={handleImperativeSubmit}
      />
    </>
  )
}
