export function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function VaultsMessage(num, filter) {
    if (num === 0 && !filter) {
        return 'There are no Vaults.'
    } else if (num === 0 && filter) {
        return `There are no ${filter} Vaults.`
    } else if (num === 1 && !filter) {
        return 'There is 1 Vault.'
    } else if (num === 1 && filter) {
        return `There is 1 ${filter} Vault.`
    } else if (!filter) {
        return `There are ${num} total Vaults.`
    } else {
        return `There are ${num} ${filter} Vaults.`
    }
}