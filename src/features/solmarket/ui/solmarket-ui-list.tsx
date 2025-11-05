import { SolmarketUiCard } from './solmarket-ui-card'
import { useSolmarketAccountsQuery } from '@/features/solmarket/data-access/use-solmarket-accounts-query'
import { UiWalletAccount } from '@wallet-ui/react'

export function SolmarketUiList({ account }: { account: UiWalletAccount }) {
  const solmarketAccountsQuery = useSolmarketAccountsQuery()

  if (solmarketAccountsQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!solmarketAccountsQuery.data?.length) {
    return (
      <div className="text-center">
        <h2 className={'text-2xl'}>No accounts</h2>
        No accounts found. Initialize one to get started.
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {solmarketAccountsQuery.data?.map((solmarket) => (
        <SolmarketUiCard account={account} key={solmarket.address} solmarket={solmarket} />
      ))}
    </div>
  )
}
