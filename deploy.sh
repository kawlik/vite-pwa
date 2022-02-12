#!/usr/bin/env sh


#   Config
#   *   *   *   *   *   *   *   *   *   *   *

#   abort on errors
set -e


#   Build app
#   *   *   *   *   *   *   *   *   *   *   *

#   build
npm run build


#   Create commit
#   *   *   *   *   *   *   *   *   *   *   *

git add dist/ -f
git commit -m 'deploy'
git subtree push --prefix dist/ origin gh-pages


#   After deploy
#   *   *   *   *   *   *   *   *   *   *   *

echo 'Deploy completed successfully!'