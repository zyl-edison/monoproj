package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "npm_package", "ts_library")

ts_library(
    name = "shared",
    srcs = glob(["**/*.ts"]),
    module_name = "@monoproj/shared",
    deps = [
        "//packages/shared/src/interfaces",
        "//packages/shared/src/types",
    ]
)

npm_package(
    name = "package",
    srcs = ["package.json"],
    replacements = {"//internal/": "//"},
    deps = [":shared"],
)
