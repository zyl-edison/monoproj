package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "npm_package", "ts_library")

ts_library(
    name = "core",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core",
    deps = [
        "@npm//@monoproj/shared",
        "//packages/core/src/classes",
        "//packages/core/src/decorators",
        "//packages/core/src/helpers",
        "//packages/core/src/interfaces",
    ]
)

npm_package(
    name = "package",
    srcs = ["package.json"],
    replacements = {"//internal/": "//"},
    deps = [":core"],
)
