import { useState, useEffect } from 'react'
import Head from 'next/head'
import Store from 'store'
import data from '../data/data.json'
import { AnimatePresence } from 'framer-motion'

import Layout from '../components/layout/Layout'
import { deleteVault } from '../utilities/Vaults'

export default function App({ Component, pageProps, router }) {
	const [Vaults, setVaults] = useState(null)

	useEffect(() => {
		if (Store.get('Vaults') === undefined) {
			Store.set('Vaults', data)
		}
		setVaults(Store.get('Vaults'))
	}, [setVaults])

	function handleDelete(id, closePopup) {
		closePopup(false)
		router.push('/')
		deleteVault(id, Vaults, setVaults)
	}

	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon-32x32.png" type="image/icon"/>
			</Head>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component 
						{...pageProps} 
						Vaults={Vaults} 
						setVaults={setVaults} 
						handleDelete={handleDelete}
						key={router.route}
					/>
				</AnimatePresence>
			</Layout>
		</>
	)
}