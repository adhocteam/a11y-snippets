# Purpose

Provide a research-ready breadcrumb navigation pattern that meets three broad goals:

1. Offer a screenreader-only `H6` for heading navigation
2. Offer visual flourishes that are invisible to assistive devices
3. Offer context-aware `aria-label` attributes for assistive devices. These labels will be read by screenreaders instead of the shorter link labels shown onscreen.

## Instructions

1. Open a terminal window
2. Enter the command `python -m SimpleHTTPServer 8000` from your terminal prompt
3. Open a browser, and enter the url `localhost:8000`
4. You are now able to run accessibility tools like [axe-core](https://github.com/dequelabs/axe-core)