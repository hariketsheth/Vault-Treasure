import styled from 'styled-components'
import VaultItem from './VaultItem'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

const animation = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .15
        }
    }
}

export default function VaultsList({ Vaults }) {
    return (
        <>
            {Vaults && 
                <Wrapper
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                >
                    {Vaults.map((Vault) => {
                        return (
                            <VaultItem
                                key={Vault.id}
                                id={Vault.id}
                                paymentDue={Vault.paymentDue}
                                clientName={Vault.clientName}
                                total={Vault.total}
                                status={Vault.status}
                            />
                        )
                    })}
                </Wrapper>
            }
        </>
    )
}