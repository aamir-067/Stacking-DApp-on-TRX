import PeerDetailsReducer ,{ setPeerDetails, resetPeerDetails } from "./PeerDetailsReducer";
import web3Reducer, { initWeb3 } from "./web3Reducer";
export {
    initWeb3,
    web3Reducer,
    PeerDetailsReducer as peerDetailsReducer,
    setPeerDetails,
    resetPeerDetails
};