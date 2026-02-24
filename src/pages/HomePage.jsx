import React from 'react'
import { Banner } from '../components'
import { Hit } from '../components/Hit'
import { New } from '../components/New'
import { Brands } from '../components/Brands'
import { News } from '../components/News'

function HomePage() {
  return (
    <>
    <Banner />
    <Hit />
    <New />
    <Brands />
    <News />
    </>
  )
}

export default HomePage