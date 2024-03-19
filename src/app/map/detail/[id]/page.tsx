import React from 'react'
import MapDetail from '@/containers/map/detail'
import { Layout } from '@/components/organism'

const MapDetailPage = async ({
  params: { id },
}: {
  params: { id: number }
}) => {
  return (
    <Layout>
      <MapDetail id={id} />
    </Layout>
  )
}

export default MapDetailPage
