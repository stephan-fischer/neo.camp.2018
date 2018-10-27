import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Neon, {wallet, api} from '@cityofzion/neon-js';

@Injectable({
  providedIn: 'root'
})
export class NeoService {

  constructor() {
  }

  public executeSmartContract() {
  
    const config = {
      // net: new api.neoscan.instance('TestNet'),
      net: new  api.neoscan.instance('TestNet'),
      script: Neon.create.script({
        scriptHash: '5b7074e873973a6ed3708862f219a6fbf4d1c411',
        operation: 'balanceOf',
        args: [Neon.u.reverseHex('cef0c0fdcfe7838eff6ff104f9cdec2922297537')]
      }),
      account: new wallet.Account(environment.accountPrivateKey),
      gas: 1
    } as any;

    const invoke = Neon.doInvoke(config);
    

    return invoke;

  }
}
