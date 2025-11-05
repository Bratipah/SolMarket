import { SolmarketAccount, getIncrementInstruction } from '@project/anchor'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { useMutation } from '@tanstack/react-query'
import { toastTx } from '@/components/toast-tx'
import { useSolmarketAccountsInvalidate } from './use-solmarket-accounts-invalidate'

export function useSolmarketIncrementMutation({
  account,
  solmarket,
}: {
  account: UiWalletAccount
  solmarket: SolmarketAccount
}) {
  const invalidateAccounts = useSolmarketAccountsInvalidate()
  const signAndSend = useWalletUiSignAndSend()
  const signer = useWalletUiSigner({ account })

  return useMutation({
    mutationFn: async () => await signAndSend(getIncrementInstruction({ solmarket: solmarket.address }), signer),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
