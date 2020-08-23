import { createSchema } from 'rhfa-react-native'

const pet = createSchema('pet', {
  name: {
    type: String,
    required: true,
    maxLength: 8
  },
  heads: {
    type: Number
  },
  hair: {
    type: 'select',
    options: ['blue', 'yellow']
  },
})

export const owner = createSchema('owner', {
  name: {
    type: 'string',
    required: true,
  },
  height: {
    type: 'radios',
    options: ['tall', 'short']
  },
  usesHat: {
    type: 'boolean'
  },
  armLength: {
    type: 'range',
    min: 1,
    max: 10,
    step: 0.1
  },
  pets: {
    type: [pet],
    minChildren: 1,
    maxChildren: 3
  }
})
