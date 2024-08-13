# R代码格式化突然失效
试过重装vscode软件，vscode-R插件，均无效
debug方式：
ctrl+shift+U调出输出界面查看是否有报错，选择R language server信息查看，发现提示magrittr包故障，故进行重装，install方法安装失败（non-zero退出），使用pak方法安装成功。
R代码格式化恢复正常。
