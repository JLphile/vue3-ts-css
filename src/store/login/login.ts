import { Module } from 'vuex'

import { IAccount } from '@/service/login/type'
import { accountLoginRequest } from '@/service/login/login'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,

  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    }

    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行了phoneLoginAction')
    // }
  }
}

export default loginModule
