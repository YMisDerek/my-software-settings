##########################################################################@ # 指定版本装包路径

### 当使用网页版R server，指定lib为R3.6.3环境lib
if(.libPaths()[1] == "/usr/lib64/R/library"){
    .libPaths(c("/home/yuanming/mambaforge/envs/r363/lib/R/library", .libPaths()))
    message("Using library: ", .libPaths()[1])
}

### 当使用bio/r4环境，指定lib为R4环境lib
if(R.version$major == "4"){
    .libPaths(c("/home/yuanming/mambaforge/envs/r4/lib/R/library", .libPaths()))
    message("Using library: ", .libPaths()[1])
}

# ##: 版本切换，复制lib、指定为新版本libpath，r包自检、自升级
# update.packages(checkBuilt=TRUE, ask=FALSE)



##########################################################################@ # 装包镜像配置
# options(BioC_mirror="https://mirrors.tuna.tsinghua.edu.cn/bioconductor")
options(repos = c(CRAN="https://mirrors.sustech.edu.cn/CRAN/"))



##########################################################################@ # styler配置
### 缩进改为4个字符
options(
    styler.addins_style_transformer = "styler::tidyverse_style(indent_by = 4)"
)
