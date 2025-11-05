import { useSolana } from '@/components/solana/use-solana'

export function useSolmarketAccountsQueryKey() {
  const { cluster } = useSolana()

  return ['solmarket', 'accounts', { cluster }]
}
