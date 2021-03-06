import React from 'react'

import { Text } from './'

export default ({ children }) => (
  <div className="col-12 col-lg-8 mx-auto">
    <Text className="mb-4 pb-4" style={{ lineHeight: 1.8, fontFamily: 'Superclarendon Light' }}>{children}</Text>
  </div>
)
