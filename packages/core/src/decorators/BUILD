package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "ts_library")

ts_library(
    name = "decorators",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core/src/decorators",
    deps = [
        "//packages/core/src/classes",
        "//packages/core/src/interfaces",
    ]
)
