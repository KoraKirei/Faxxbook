import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout'

const Faxxbook = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
      </AppLayout>
      <Component />
    </> 
  )
}

export default Faxxbook;