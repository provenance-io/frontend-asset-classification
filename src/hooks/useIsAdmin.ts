import { useWalletConnect } from "@provenanceio/walletconnect-js"
import { useAssetClassificationConfig } from "./useAssetClassificationConfig"

export const useIsAdmin = () => {
    const { walletConnectState } = useWalletConnect()
    const { data: config, isLoading } = useAssetClassificationConfig()
    
    return !isLoading && config?.admin === walletConnectState.address
}