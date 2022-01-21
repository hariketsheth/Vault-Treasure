import styled from 'styled-components'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'

import VaultTable from './VaultTable'
import { Heading1, Heading3 } from '../shared/Headings'
import { fontStylesA, fontStylesB } from '../shared/Typography'

const Wrapper = styled(motion.section)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    padding: 1.5rem;
    background: ${props => props.theme.color.VaultItem.bg};
    transition: background .3s;

    .Vault-table {
        grid-column: 1 / -1;
        grid-row: 6 / 7;
    }

    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 1.25rem;
    }
`

// title

const Title = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
`

const Id = styled(Heading1)`
    margin-bottom: .25rem;
    font-size: .75rem;

    span {
        color: #7E88C3;
    }

    @media only screen and (min-width: 768px) {
        margin-bottom: .5rem;
        font-size: 1rem;
    }
`

const Description = styled.span`
    ${fontStylesA}
`

// sender address

const SenderAddress = styled.address`
    display: flex;
    flex-direction: column;
    ${fontStylesB}
    font-style: normal;

    @media only screen and (min-width: 768px) {
        text-align: end;
    }
`

// dates

const Dates = styled.div`
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`

const Date = styled.div`
    display: flex;
    flex-direction: column;
`

const DateTitle = styled.span`
    margin-bottom: .25rem;
    ${fontStylesB}
    font-size: .75rem;
`

const Subheading = styled(Heading3)`
    text-decoration: none;
    
    && {
        font-size: .9375rem;
    }
`

// client address

const ClientAddress = styled.address`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    ${fontStylesB}
    font-style: normal;

    & *:nth-child(1) {
        margin-bottom: .5rem;
    }

    & *:nth-child(2) {
        margin-bottom: .25rem;
    }
`

// client email

const Email = styled.div`
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }
`

const EmailTitle = styled.span`
    margin-bottom: .25rem;
    ${fontStylesB}
    font-size: .75rem;
`

export default function VaultBody({ Vault }) {
    return (
        <Wrapper exit={{ opacity: 0, transition: { duration: 1 }}}>
            <Title>
                <Id><span>#</span>{Vault.id}</Id>
                <Description>{Vault.description}</Description>
            </Title>

            <SenderAddress>
                <span>{Vault.senderAddress.street}</span>
                <span>{Vault.senderAddress.city}</span>
                <span>{Vault.senderAddress.postCode}</span>
                <span>{Vault.senderAddress.country}</span>
            </SenderAddress>

            <Dates>
                <Date>
                    <DateTitle>Vault Date</DateTitle>
                    <Subheading as="span">{dayjs(Vault.createdAt).format('DD MMM YYYY')}</Subheading>
                </Date>
                <Date>
                    <DateTitle>Payment Due</DateTitle>
                    <Subheading as="span">{dayjs(Vault.paymentDue).format('DD MMM YYYY')}</Subheading>
                </Date>
            </Dates>

            <ClientAddress>
                <div>Bill To</div>
                <Subheading as="div">{Vault.clientName}</Subheading>
                <span>{Vault.clientAddress.street}</span>
                <span>{Vault.clientAddress.city}</span>
                <span>{Vault.clientAddress.postCode}</span>
                <span>{Vault.clientAddress.country}</span>
            </ClientAddress>

            <Email>
                <EmailTitle>Sent to</EmailTitle>
                <Subheading as="a" href={`mailto:${Vault.clientEmail}`}>{Vault.clientEmail}</Subheading>
            </Email>

            <VaultTable className="Vault-table" items={Vault.items} total={Vault.total}/>
        </Wrapper>
    )
}