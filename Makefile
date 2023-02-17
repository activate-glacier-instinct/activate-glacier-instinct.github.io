# -include .env

# .PHONY: all test clean deploy-anvil

# all: clean update build

# Clean the repo
fetch-new-posts  :; npm run data:download && git add . && git commit -m 'CHORE: updates content with latest' && git push origin main