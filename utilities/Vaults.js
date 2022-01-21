import Store from 'store'

export function addVault(Vault, Vaults, setVaults) {
	const newVaults = [Vault, ...Vaults]
	setVaults(newVaults)
	Store.set('Vaults', newVaults)
}

export function deleteVault(id, Vaults, setVaults) {
	const newVaults = Vaults.filter((Vault) => {
		return id !== Vault.id
	})
	setVaults(newVaults)
	Store.set('Vaults', newVaults)
}

export function updateVault(newVault, Vaults, setVaults) {
	const newVaults = Vaults.map((Vault) => {
		if (newVault.id === Vault.id) {
			return newVault
		}
		return Vault
	})
	setVaults(newVaults)
	Store.set('Vaults', newVaults)
}

export function markAsPaid(id, Vaults, setVaults) {
	const newVaults = Vaults.map((Vault) => {
		if (id === Vault.id) {
			return { ...Vault, status: 'paid' }
		}
		return Vault
	})
	setVaults(newVaults)
	Store.set('Vaults', newVaults)
}