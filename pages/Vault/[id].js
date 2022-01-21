import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import Wrapper from '../../components/Vault/Wrapper'
import EditVaultForm from '../../components/form/EditVaultForm'
import DeletePopup from '../../components/Vault/DeletePopup'
import HomeLink from '../../components/Vault/HomeLink'
import VaultHeader from '../../components/Vault/VaultHeader'
import VaultBody from '../../components/Vault/VaultBody'
import VaultFooter from '../../components/Vault/VaultFooter'

import { markAsPaid } from '../../utilities/Vaults'

export default function Vault({ Vaults, setVaults, handleDelete }) {
    const router = useRouter()
    const [id, setId] = useState(null)
    const [Vault, setVault] = useState(null)
    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const [formIsOpen, setFormIsOpen] = useState(false)

    useEffect(() => {
        setId(router.query.id)
        setVault(Vaults?.find(Vault => router.query.id === Vault.id))
    }, [router.query, Vaults])

    function handlePaid() {
        markAsPaid(id, Vaults, setVaults)
    }

    return (
        <>
            <Head>
                <title>Vault | {id && `#${id}`}</title>
            </Head>
            <DeletePopup 
                id={id} 
                popupIsOpen={popupIsOpen} 
                setPopupIsOpen={setPopupIsOpen} 
                handleDelete={handleDelete}
            />
            <EditVaultForm
                Vault={Vault}
                Vaults={Vaults} 
                setVaults={setVaults}
                isOpen={formIsOpen}
                setIsOpen={setFormIsOpen}
            />
            <Wrapper>
                <HomeLink/>
                <VaultHeader 
                    className="Vault-page-header" 
                    status={Vault?.status} 
                    setPopupIsOpen={setPopupIsOpen}
                    setFormIsOpen={setFormIsOpen}
                    handlePaid={handlePaid}
                />
                <AnimatePresence>
                    {Vault && <VaultBody Vault={Vault}/>}
                </AnimatePresence>
            </Wrapper>
            <VaultFooter 
                status={Vault?.status}
                setPopupIsOpen={setPopupIsOpen}
                setFormIsOpen={setFormIsOpen}
                handlePaid={handlePaid}
            />
        </>
    )
}