package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "npm_package", "ts_library", "nodejs_binary")

ts_library(
    name = "shared",
    srcs = glob(["**/*.ts"]),
    module_name = "@monoproj/shared",
    deps = ["//packages/shared/interfaces"]
)

nodejs_binary(
    name = "app",
    data = [":shared"],
    entry_point = "packages/shared/index.js"
)

npm_package(
    name = "package",
    srcs = ["package.json"],
    replacements = {"//internal/": "//"},
    deps = [":shared"],
)
