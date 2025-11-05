import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { SolmarketUiButtonInitialize } from './ui/solmarket-ui-button-initialize'
import { SolmarketUiList } from './ui/solmarket-ui-list'
import { SolmarketUiProgramExplorerLink } from './ui/solmarket-ui-program-explorer-link'
import { SolmarketUiProgramGuard } from './ui/solmarket-ui-program-guard'

export default function SolmarketFeature() {
  const { account } = useSolana()

  return (
    <SolmarketUiProgramGuard>
      <AppHero
        title="Solmarket"
        subtitle={
          account
            ? "Initialize a new solmarket onchain by clicking the button. Use the program's methods (increment, decrement, set, and close) to change the state of the account."
            : 'Select a wallet to run the program.'
        }
      >
        <p className="mb-6">
          <SolmarketUiProgramExplorerLink />
        </p>
        {account ? (
          <SolmarketUiButtonInitialize account={account} />
        ) : (
          <div style={{ display: 'inline-block' }}>
            <WalletDropdown />
          </div>
        )}
      </AppHero>
      {account ? <SolmarketUiList account={account} /> : null}
    </SolmarketUiProgramGuard>
  )
}
