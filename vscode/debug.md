# R代码格式化突然失效
- 试过重装vscode软件，vscode-R插件，均无效
- debug方式：
ctrl+shift+U调出输出界面查看是否有报错，选择R language server信息查看，发现提示magrittr包故障，故进行重装，install方法安装失败（non-zero退出），使用pak方法安装成功。
R代码格式化恢复正常。


# windows配置vscode + mamba r4环境
- 问题：创建r4环境后，指定rpath无法启用r4环境的R.exe，提示缺少dll文件
- 解决方案：在base环境中安装r-base，r4环境中R.exe恢复正常打开
```
D:\program\python3\Scripts\radian.exe '--no-save' '--no-restore' '--r-binary=D:\program\Miniforge-pypy3\envs\r4\Scripts\R.exe'
```
