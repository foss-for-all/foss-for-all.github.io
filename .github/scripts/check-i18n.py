#!/usr/bin/env python3
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

KO_ONLY_PREFIXES = ("content/disclosures/",)
KO_ONLY_FILES = ()


def load_keys(path):
    keys = set()
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            m = re.match(r"^([A-Za-z0-9_]+):", line)
            if m:
                keys.add(m.group(1))
    return keys


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def find_i18n_gaps():
    out = []
    ko = os.path.join(ROOT, "i18n/ko.yaml")
    en = os.path.join(ROOT, "i18n/en.yaml")
    if not (os.path.exists(ko) and os.path.exists(en)):
        return out
    kk, ek = load_keys(ko), load_keys(en)
    for k in sorted(kk - ek):
        out.append(("i18n/en.yaml", f"i18n key '{k}' is in ko.yaml but missing from en.yaml"))
    for k in sorted(ek - kk):
        out.append(("i18n/ko.yaml", f"i18n key '{k}' is in en.yaml but missing from ko.yaml"))
    return out


def find_pair_gaps():
    out = []
    content = os.path.join(ROOT, "content")
    for dirpath, _, files in os.walk(content):
        for name in files:
            if not name.endswith(".md") or name.endswith(".en.md"):
                continue
            ko_path = os.path.join(dirpath, name)
            r = rel(ko_path)
            if r.startswith(KO_ONLY_PREFIXES) or r in KO_ONLY_FILES:
                continue
            en_path = ko_path[:-3] + ".en.md"
            if not os.path.exists(en_path):
                out.append((r, f"Korean page has no English counterpart ({name[:-3]}.en.md)"))
    return out


def main():
    i18n = find_i18n_gaps()
    pairs = find_pair_gaps()

    if "--markdown" in sys.argv[1:]:
        lines = ["<!-- managed by .github/workflows/i18n-issue.yml; edits will be overwritten -->"]
        lines.append("Korean/English drift, refreshed on every push to `main`.\n")
        lines.append("### Missing i18n keys")
        lines += ([f"- [ ] `{f}`: {m}" for f, m in i18n] or ["- none"])
        lines.append("\n### Pages missing an English translation")
        lines += ([f"- [ ] `{f}`" for f, _ in pairs] or ["- none"])
        print("\n".join(lines))
        print(f"\n_Total: {len(i18n) + len(pairs)} gap(s)._")
        return 0

    for f, m in i18n + pairs:
        print(f"::warning file={f}::{m}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
