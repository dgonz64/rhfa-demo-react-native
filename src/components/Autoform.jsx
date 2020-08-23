import React, { forwardRef } from 'react'

import { Autoform as RHFAutoform } from 'rhfa-react-native'
import { createStyles } from 'rhfa-react-native/dist/emergencyStyles'

const styles = createStyles()

export let Autoform = (props, ref) =>
  <RHFAutoform styles={styles} {...props} ref={ref} />

Autoform = forwardRef(Autoform)
