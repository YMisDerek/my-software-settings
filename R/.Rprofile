##########################################################################@ # 指定版本装包路径

# r3
.libPaths(c("/home/yuanming/software/r_library_3.6",
            "/home/yuanming/mambaforge/envs/r363/lib/R/library",
            .libPaths()))

# # r4
# .libPaths(c("/home/yuanming/mambaforge/envs/r4/lib/R/library",
#             .libPaths()))

# ##: 版本切换，复制lib、指定为新版本libpath，r包自检、自升级
# update.packages(checkBuilt=TRUE, ask=FALSE)



##########################################################################@ # 装包镜像配置
# options(BioC_mirror="https://mirrors.tuna.tsinghua.edu.cn/bioconductor")
options(repos = c(CRAN="https://mirrors.sustech.edu.cn/CRAN/"))



##########################################################################@ # 
styler配置
options(
    styler.addins_style_transformer = "styler::tidyverse_style(indent_by = 4)"
)
