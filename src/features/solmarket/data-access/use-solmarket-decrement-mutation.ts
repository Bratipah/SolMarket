import { SolmarketAccount, getDecrementInstruction } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { toastTx } from '@/components/toast-tx'
import { useSolmarketAccountsInvalidate } from './use-solmarket-accounts-invalidate'

export function useSolmarketDecrementMutation({
  account,
  solmarket,
}: {
  account: UiWalletAccount
  solmarket: SolmarketAccount
}) {
  const invalidateAccounts = useSolmarketAccountsInvalidate()
  const signer = useWalletUiSigner({ account })
  const signAndSend = useWalletUiSignAndSend()

  return useMutation({
    mutationFn: async () => await signAndSend(getDecrementInstruction({ solmarket: solmarket.address }), signer),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
