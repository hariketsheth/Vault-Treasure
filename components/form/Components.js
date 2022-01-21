import styled from 'styled-components'

import { Heading2 } from '../shared/Headings'

const Heading = styled(Heading2)`
    margin-bottom: 3rem;
    font-size: 1.5rem;
`

export const CreateVaultFormHeading = styled(Heading)``

export const EditVaultFormHeading = styled(Heading)`
    span {
        color: #888EB0;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: .5rem;
    padding 2rem 0;

    > button {
        padding: 1rem;
    }

    @media only screen and (min-width: 450px) {
        > button {
            padding: 1rem 1.5rem;
        }
    }
`

export const CreateVaultFormButtons = styled(Buttons)`
    > *:first-child {
        margin-right: auto;
    }
`

export const EditVaultFormButtons = styled(Buttons)`
    justify-content: flex-end;
`