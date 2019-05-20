package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "ts_library")

ts_library(
    name = "classes",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core/src/classes",
    deps = [
        "@npm//rxjs",
        "//packages/core/src/interfaces",
    ]
)
