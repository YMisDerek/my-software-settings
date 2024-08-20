# vscode配置R语言编程环境（替代Rstudio）
https://vscode.js.cn/docs/languages/r
## 安装：
- languageserver（linux/win）
- radian（linux/win）
- httpgd（linux/win）
- R（本地vscode）

## 配置
1. 指定R执行文件路径
    打开vscode扩展R的setting进行配置：
    ```
    - Rpath：/public6/yuanming/software2/miniforge_pypy3/envs/r3/bin/R
    - Rterm：/public6/yuanming/software2/miniforge_pypy3/envs/r3/bin/radian
    ```
    > 补充：Rpath指定无效，需通过rterm.option的--r-binary指定实现
    > ```
    > "r.rterm.option": [
    >    "--no-save",
    >    "--no-restore",
    >    "--r-binary=/usr/local/bin/R"]
    > ```
3. 补全配置
   - 路径补全：pathautocomplete插件
   - 输入补全：R扩展自带LSP
4. 执行选定行后光标跳转至下一行
    > 通过一次执行两条命令实现
    >```
    >   {
    >        "key": "ctrl+enter",
    >       // "command": "workbench.action.terminal.runSelectedText"
    >        "command": "runCommands",
    >        "args": {
    >            "commands": [
    >                "workbench.action.terminal.runSelectedText",
    >                "cursorDown",
    >            ]
    >        },
    >        "when": "editorTextFocus"
    >    },
    >```
5. 使vscode使用终端时加载bash_profile中的配置，如alias等等
    ```
        "terminal.integrated.defaultProfile.linux": "bash",
    "terminal.integrated.profiles.linux": {
        "bash": {
            "path": "bash",
            "icon": "terminal-bash",
            "args": [
                "-l"
            ]
        }
    },
    ```
