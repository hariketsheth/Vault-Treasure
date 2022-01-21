import { Formik } from 'formik'
import { AnimatePresence } from 'framer-motion'

import Form from './Form'
import Fields from './Fields'
import Button from '../shared/Buttons'
import { 
    CreateVaultFormHeading as Heading,
    CreateVaultFormButtons as Buttons
} from './Components'

import { initialValues, validationSchema } from '../../data/Form'

import { createVault } from '../../utilities/Form'
import { generateUniqueId } from '../../utilities/Id'
import { addVault } from '../../utilities/Vaults'

export default function CreateVaultForm({ Vaults, setVaults, isOpen, setIsOpen }) {
    function onSubmit(values) {
        const newVault = {...createVault('pending', values), id: generateUniqueId(Vaults)}
        addVault(newVault, Vaults, setVaults)
        setIsOpen(false)
    }

    function addDraft(values) {
        const newVault = {...createVault('draft', values), id: generateUniqueId(Vaults)}
        addVault(newVault, Vaults, setVaults)
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
            {isOpen &&
                <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
                >
                    {formik => (
                        <Form setIsOpen={setIsOpen}>
                            <Heading>Create Vault</Heading>
                            <Fields/>
                            <Buttons>
                                <Button type="button" secondary onClick={() => setIsOpen(false)}>Discard</Button>
                                <Button type="button" tertiary onClick={() => addDraft(formik.values)}>Save as Draft</Button>
                                <Button type="submit">Save & Send</Button>
                            </Buttons>
                        </Form>
                    )}
                </Formik>
            }
        </AnimatePresence>
    )
}