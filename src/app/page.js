import React from 'react'
import Loader from '../app/Loader/page'
import Head from 'next/head'

function page() {
  return (
    <>
    <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

<Loader/>


    </>
  )
}

export default page