import { Button } from '@/components/ui/button'
import { UiWalletAccount } from '@wallet-ui/react'

import { useSolmarketInitializeMutation } from '@/features/solmarket/data-access/use-solmarket-initialize-mutation'

export function SolmarketUiButtonInitialize({ account }: { account: UiWalletAccount }) {
  const mutationInitialize = useSolmarketInitializeMutation({ account })

  return (
    <Button onClick={() => mutationInitialize.mutateAsync()} disabled={mutationInitialize.isPending}>
      Initialize Solmarket {mutationInitialize.isPending && '...'}
    </Button>
  )
}
