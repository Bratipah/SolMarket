import { SolmarketAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useSolmarketDecrementMutation } from '../data-access/use-solmarket-decrement-mutation'

export function SolmarketUiButtonDecrement({ account, solmarket }: { account: UiWalletAccount; solmarket: SolmarketAccount }) {
  const decrementMutation = useSolmarketDecrementMutation({ account, solmarket })

  return (
    <Button variant="outline" onClick={() => decrementMutation.mutateAsync()} disabled={decrementMutation.isPending}>
      Decrement
    </Button>
  )
}
