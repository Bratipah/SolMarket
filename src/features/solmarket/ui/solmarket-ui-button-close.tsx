import { SolmarketAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useSolmarketCloseMutation } from '@/features/solmarket/data-access/use-solmarket-close-mutation'

export function SolmarketUiButtonClose({ account, solmarket }: { account: UiWalletAccount; solmarket: SolmarketAccount }) {
  const closeMutation = useSolmarketCloseMutation({ account, solmarket })

  return (
    <Button
      variant="destructive"
      onClick={() => {
        if (!window.confirm('Are you sure you want to close this account?')) {
          return
        }
        return closeMutation.mutateAsync()
      }}
      disabled={closeMutation.isPending}
    >
      Close
    </Button>
  )
}
