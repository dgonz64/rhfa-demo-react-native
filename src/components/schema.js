import { createSchema } from 'rhfa-react-native'

const pet = createSchema('pet', {
  name: {
    type: String,
    required: true,
    maxLength: 8
  },
  heads: {
    type: Number,
    onChange: (value, { arrayControl }) => {
      if (value == '42')
        arrayControl.add()
      if (value == '13')
        arrayControl.remove(arrayControl.index)
    },
    helperText: 'Enter 42 to add and 13 to remove'
  },
  hair: {
    type: 'select',
    options: ['blue', 'yellow'],
    onChange: (value, { name, setHelperText }) => {
      setHelperText(name, `Better not choose ${value}`)
    }
  },
});

export const owner = createSchema('owner', {
  name: {
    type: 'string',
    required: true,
  },
  height: {
    type: 'radios',
    options: ['tall', 'short'],
    onChange: (value, { setValue }) => {
      if (value == 'tall')
        setValue('name', 'André the Giant')
    }
  },
  usesHat: {
    type: 'boolean',
    onChange: (value, { setVisible }) => {
      setVisible('hatColor', value)
    }
  },
  hatColor: {
    type: 'select',
    options: ['black', 'red'],
    initiallyVisible: false
  },
  pets: {
    type: [pet],
    minChildren: 1,
    maxChildren: 2
  }
});
