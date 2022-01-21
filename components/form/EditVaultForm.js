import { Formik } from 'formik'
import { AnimatePresence } from 'framer-motion'

import Form from './Form'
import Fields from './Fields'
import Button from '../shared/Buttons'
import { 
    EditVaultFormHeading as Heading, 
    EditVaultFormButtons as Buttons 
} from './Components'

import { validationSchema } from '../../data/Form'

import { createVault } from '../../utilities/Form'
import { updateVault } from '../../utilities/Vaults'

export default function EditVaultForm({ Vault, Vaults, setVaults, isOpen, setIsOpen }) {    
    function onSubmit(values) {
        const newVault = {...createVault('pending', values), id: Vault.id}
        updateVault(newVault, Vaults, setVaults)
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
            {isOpen &&
                <Formik 
                    initialValues={{
                        senderAddress: Vault.senderAddress,
                        clientName: Vault.clientName,
                        clientEmail: Vault.clientEmail,
                        clientAddress: Vault.clientAddress,
                        createdAt: new Date(Vault.createdAt),
                        paymentTerms: Vault.paymentTerms,
                        description: Vault.description,
                        items: Vault.items
                    }} 
                    validationSchema={validationSchema} 
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <Form setIsOpen={setIsOpen}>
                            <Heading>Edit <span>#</span>{Vault.id}</Heading>
                            <Fields/>
                            <Buttons>
                                <Button type="button" secondary onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button type="submit">Save Changes</Button>
                            </Buttons>
                        </Form>
                    )}
                </Formik>
            }
        </AnimatePresence>
    )
}