package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "ts_library")

ts_library(
    name = "interfaces",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core/src/interfaces",
    deps = [
        "@npm//rxjs",
        "//packages/core/src/classes",
    ]
)
