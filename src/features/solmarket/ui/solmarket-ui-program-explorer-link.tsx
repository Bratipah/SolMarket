import { SOLMARKET_PROGRAM_ADDRESS } from '@project/anchor'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function SolmarketUiProgramExplorerLink() {
  return <AppExplorerLink address={SOLMARKET_PROGRAM_ADDRESS} label={ellipsify(SOLMARKET_PROGRAM_ADDRESS)} />
}
