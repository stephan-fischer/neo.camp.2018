import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Neon, {wallet, api, rpc} from '@cityofzion/neon-js';

@Injectable({
  providedIn: 'root'
})
export class NeoService {

  constructor() {
    this.rpcEndpoint = 'coolcool';
  }

  readonly rpcEndpoint: string; // config;

  public executeSmartContract() {
    const rpcConfig = {
      name: 'PrivateNet',
      extra: {
        neoscan: 'http://localhost:4000/api/main_net'
      }
    };

    const privateNet = new rpc.Network(rpcConfig);
    Neon.add.network(privateNet);



    //const account = new wallet.Account('12');

    const config = {
      // net: new api.neoscan.instance('TestNet'),
      net: new  api.neoscan.instance('PrivateNet'),
      script: Neon.create.script({
        scriptHash: '5b7074e873973a6ed3708862f219a6fbf4d1c411',
        operation: 'balanceOf',
        args: [Neon.u.reverseHex('cef0c0fdcfe7838eff6ff104f9cdec2922297537')]
      }),
   //   account: account,
      gas: 1
    } as any;

    const invoke = Neon.doInvoke(config);

    return invoke;

  }
}
