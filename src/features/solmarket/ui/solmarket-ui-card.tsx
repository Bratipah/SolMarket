import { SolmarketAccount } from '@project/anchor'
import { ellipsify, UiWalletAccount } from '@wallet-ui/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { SolmarketUiButtonClose } from './solmarket-ui-button-close'
import { SolmarketUiButtonDecrement } from './solmarket-ui-button-decrement'
import { SolmarketUiButtonIncrement } from './solmarket-ui-button-increment'
import { SolmarketUiButtonSet } from './solmarket-ui-button-set'

export function SolmarketUiCard({ account, solmarket }: { account: UiWalletAccount; solmarket: SolmarketAccount }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solmarket: {solmarket.data.count}</CardTitle>
        <CardDescription>
          Account: <AppExplorerLink address={solmarket.address} label={ellipsify(solmarket.address)} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 justify-evenly">
          <SolmarketUiButtonIncrement account={account} solmarket={solmarket} />
          <SolmarketUiButtonSet account={account} solmarket={solmarket} />
          <SolmarketUiButtonDecrement account={account} solmarket={solmarket} />
          <SolmarketUiButtonClose account={account} solmarket={solmarket} />
        </div>
      </CardContent>
    </Card>
  )
}
