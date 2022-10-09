import hyRequest from '../index'
import { IAccount } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
