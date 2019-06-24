package(default_visibility = ["//visibility:public"])

load("//tools:defaults.bzl", "npm_package", "ts_library", "nodejs_binary")
load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle", "jasmine_node_test")

ts_library(
    name = "core",
    srcs = glob(["*.ts"]),
    module_name = "@monoproj/core",
    deps = ["//packages/shared"]
)

nodejs_binary(
    name = "app",
    data = [":core"],
    entry_point = "packages/core/index.js"
)

npm_package(
    name = "package",
    srcs = ["package.json"],
    replacements = {"//internal/": "//"},
    deps = [":bundle"],
)

rollup_bundle(
    name = "bundle",
    entry_point = "packages/core/index.js",
    deps = [":core"],
)

jasmine_node_test(
    name = "unit_test",
    srcs = [":spec"],
    deps = [
        "@npm//jasmine"
    ],
)


