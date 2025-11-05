import { SolmarketAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useSolmarketSetMutation } from '@/features/solmarket/data-access/use-solmarket-set-mutation'

export function SolmarketUiButtonSet({ account, solmarket }: { account: UiWalletAccount; solmarket: SolmarketAccount }) {
  const setMutation = useSolmarketSetMutation({ account, solmarket })

  return (
    <Button
      variant="outline"
      onClick={() => {
        const value = window.prompt('Set value to:', solmarket.data.count.toString() ?? '0')
        if (!value || parseInt(value) === solmarket.data.count || isNaN(parseInt(value))) {
          return
        }
        return setMutation.mutateAsync(parseInt(value))
      }}
      disabled={setMutation.isPending}
    >
      Set
    </Button>
  )
}
