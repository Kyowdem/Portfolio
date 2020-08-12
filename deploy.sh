set -e

npm run build

cd dist

echo 'portfolio-collomb-mehdi.netlify.app' > CNAME

