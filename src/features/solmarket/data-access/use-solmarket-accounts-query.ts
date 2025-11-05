import { useSolana } from '@/components/solana/use-solana'
import { useQuery } from '@tanstack/react-query'
import { getSolmarketProgramAccounts } from '@project/anchor'
import { useSolmarketAccountsQueryKey } from './use-solmarket-accounts-query-key'

export function useSolmarketAccountsQuery() {
  const { client } = useSolana()

  return useQuery({
    queryKey: useSolmarketAccountsQueryKey(),
    queryFn: async () => await getSolmarketProgramAccounts(client.rpc),
  })
}
