package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "ts_library")

ts_library(
    name = "helpers",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core/src/helpers",
    deps = [
        "@npm//rxjs",
        "//packages/core/src/interfaces",
    ]
)
