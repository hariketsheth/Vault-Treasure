import { useState, useEffect } from 'react'
import Head from 'next/head'

import Main from '../components/home/Main'
import Wrapper from '../components/home/Wrapper'
import Header from '../components/home/Header'
import NoVaults from '../components/home/NoVaults'
import VaultsList from '../components/home/VaultsList'

import CreateVaultForm from '../components/form/CreateVaultForm'

export default function Home({ Vaults, setVaults }) {
	const [filter, setFilter] = useState(null)
	const [filteredVaults, setFilteredVaults] = useState(null)
	const [formIsOpen, setFormIsOpen] = useState(false)
	
	useEffect(() => {
		setFilteredVaults(Vaults)

		if (Vaults && filter) {
			setFilteredVaults(Vaults.filter((Vault) => {
				return Vault.status === filter
			}))
		}
	}, [Vaults, filter])

	return (
		<>
			<Head>
				<title>
					Vaults {filteredVaults && 
					filteredVaults.length !== 0 && 
					`(${filteredVaults.length})` || 
					''} | Frontend Mentor
				</title>
			</Head>
			<Main>
				<CreateVaultForm 
					Vaults={Vaults} 
					setVaults={setVaults}
					isOpen={formIsOpen}
					setIsOpen={setFormIsOpen}
				/>
				<Wrapper>
					<Header 
						Vaults={filteredVaults} 
						filter={filter} 
						setFilter={setFilter}
						setFormIsOpen={setFormIsOpen}
					/>
					{filteredVaults?.length === 0 ? 
						<NoVaults/> : 
						<VaultsList Vaults={filteredVaults}/>
					}
				</Wrapper>
			</Main>
		</>
	)
}