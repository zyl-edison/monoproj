load("@build_bazel_rules_nodejs//:defs.bzl", _nodejs_binary = "nodejs_binary", _npm_package = "npm_package")
load("@npm_bazel_typescript//:index.bzl", _ts_library = "ts_library")

def nodejs_binary(data = [], **kwargs):
    _nodejs_binary(
        **kwargs
    )

def npm_package(name, replacements = {}, **kwargs):
    """Default values for npm_package"""
    _npm_package(
        name = name,
        replacements = replacements,
        **kwargs
    )

def ts_library(deps = [], **kwargs):
    deps = deps + ["@npm//tslib"]

    _ts_library(
        deps = deps,
        **kwargs
    )
