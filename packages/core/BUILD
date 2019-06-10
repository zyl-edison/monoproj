package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "npm_package", "ts_library")

ts_library(
    name = "core",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core",
)

npm_package(
    name = "package",
    srcs = ["package.json"],
    replacements = {"//internal/": "//"},
    deps = [":bundle"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")

rollup_bundle(
    name = "bundle",
    entry_point = "packages/core/index.js",
    deps = [":core"],
)
