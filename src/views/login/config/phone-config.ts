export const phoneRules = {
  num: [
    {
      required: true,
      message: '手机号是必须的',
      trigger: 'blur'
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号格式不正确',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必须的',
      trigger: 'blur'
    },
    {
      message: '请输入正确验证码',
      trigger: 'blur'
    }
  ]
}
