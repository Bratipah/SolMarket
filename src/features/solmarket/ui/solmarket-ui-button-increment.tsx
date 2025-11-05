import { SolmarketAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'
import { useSolmarketIncrementMutation } from '../data-access/use-solmarket-increment-mutation'

export function SolmarketUiButtonIncrement({ account, solmarket }: { account: UiWalletAccount; solmarket: SolmarketAccount }) {
  const incrementMutation = useSolmarketIncrementMutation({ account, solmarket })

  return (
    <Button variant="outline" onClick={() => incrementMutation.mutateAsync()} disabled={incrementMutation.isPending}>
      Increment
    </Button>
  )
}
