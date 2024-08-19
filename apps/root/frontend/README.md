# ESLINT:
    # npm init @eslint/config@latest

# PRETTIER: https://prettier.io/docs/en/install.html
    # npm install --save-dev --save-exact prettier
        $ npx prettier . --write
        $ npx prettier . --check

# GIT HOOKS:
    # npm install --save-dev husky lint-staged
    # npx husky init
    # node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"