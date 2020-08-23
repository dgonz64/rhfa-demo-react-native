import React, { useState } from 'react'

import { owner } from './schema'

import { DemoForm } from './DemoForm'
import { DemoConfig } from './DemoConfig'
import { formCode } from './formCode'
import { View } from 'react-native'

export const Demo = () =>
  <View>
    <DemoForm schema={owner} />
  </View>
