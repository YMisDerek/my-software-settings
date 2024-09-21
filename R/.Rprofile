# *********************************
# 指定版本装包路径
# *********************************
# if (.libPaths()[1] == "/public6/yuanming/software2/miniforge_pypy3/envs/r4/lib/R/library") {
#     ### r4
#     .libPaths(c(.libPaths(), "/usr/lib64/R/library", "/usr/share/R/library"))
#     message("Using library: ", .libPaths()[1])
# } else if (.libPaths()[1] == "/public6/yuanming/software2/miniforge_pypy3/envs/r3/lib/R/library") {
#     ### r3, 添加root包路径
#     # .libPaths(c(.libPaths(), "/usr/lib64/R/library", "/usr/share/R/library"))
#     message("Using library: ", .libPaths()[1])
# }
# } else if (.libPaths()[1] == "/usr/lib64/R/library") {
#     ### 当使用网页版R server，指定自用R3包路径
#     .libPaths(c("/public6/yuanming/software2/miniforge_pypy3/envs/r3/lib/R/library", .libPaths()))

#******************************************
# 版本切换，复制lib、指定为新版本libpath，r包自检、自升级
#******************************************
# update.packages(checkBuilt=TRUE, ask=FALSE)

# *****************************
# 装包镜像配置
# *****************************
# options(BioC_mirror="https://mirrors.tuna.tsinghua.edu.cn/bioconductor")
options(repos = c(CRAN = "https://mirrors.sustech.edu.cn/CRAN/"))

# *******************************
# styler配置
# *******************************
### 缩进改为4个字符
options(
    styler.addins_style_transformer = "styler::tidyverse_style(indent_by = 4)"
)

#******************************************
# httpgd setting
#******************************************
if (interactive() && Sys.getenv("TERM_PROGRAM") == "vscode") {
  if ("httpgd" %in% .packages(all.available = TRUE)) {
    options(vsc.plot = FALSE)
    options(device = function(...) {
      httpgd::hgd(silent = TRUE)
      .vsc.browser(httpgd::hgd_url(), viewer = "Beside")
    })
  }
}
