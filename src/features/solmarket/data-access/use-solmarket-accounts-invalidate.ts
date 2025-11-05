import { useQueryClient } from '@tanstack/react-query'
import { useSolmarketAccountsQueryKey } from './use-solmarket-accounts-query-key'

export function useSolmarketAccountsInvalidate() {
  const queryClient = useQueryClient()
  const queryKey = useSolmarketAccountsQueryKey()

  return () => queryClient.invalidateQueries({ queryKey })
}
