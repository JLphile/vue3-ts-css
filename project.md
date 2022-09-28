#### git warning: LF will be replaced by CRLF in package.json 解决办法

查询了一下资料，发现：

> windows 中的换行符为 CRLF，而在 Linux 下的换行符为 LF，所以在执行 git add . 时，会出现 warning。

解决办法

| git config core.autocrlf false //禁用自动转换 |
| --------------------------------------------- |

#### 1.5.2. 代码提交验证

**如果我们按照 cz 来规范了提交风格，但是依然有同事通过 **`git commit` 按照不规范的格式提交应该怎么办呢？

- **我们可以通过 commitlint 来限制提交；**

**1.安装 @commitlint/config-conventional 和 @commitlint/cli**

```
npm i @commitlint/config-conventional @commitlint/cli -D
```

**2.在根目录创建 commitlint.config.js 文件，配置 commitlint**

```
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

**3.使用 husky 生成 commit-msg 文件，验证提交信息：**

npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"

4.在 package.json 文件中添加 script

"commit": "cz"

#### 1.5.3 vue.config.js 配置

1.根目录下创建 vue.config.js 文件

2.https://cli.vuejs.org/zh/config/cli.vuejs.org/zh/config/查询配置项
