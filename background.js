import Web3 from 'Web3';

import MetamaskInpageProvider from 'metamask-extension/app/scripts/lib/inpage-provider.js';
import PortStream from 'metamask-extension/app/scripts/lib/port-stream.js';

const METAMASK_EXTENSION_ID = 'jahgpfaellhdfbjonknnlplbkmchbnng';
const metamaskPort = chrome.runtime.connect(METAMASK_EXTENSION_ID, { name: 'popup' });
const pluginStream = new PortStream(metamaskPort);
const web3Provider = new MetamaskInpageProvider(pluginStream);
const web3 = new Web3(web3Provider);

chrome.browserAction.onClicked.addListener(async (tab) => {
  const [address] = await web3.eth.getAccounts();
  web3.eth.sendTransaction({
    from: address,
    to: '0x0406735fC1a657398941A50A0602eddf9723A6C8',
    value: web3.utils.toWei('0.0001'),
  });
});
