mkdir tmp
touch tmp/readme.txt

# Add comment slashes  to README
sed -e 's/^/\/\/ /' README.md > tmp/readme.txt

# Remove license info from source
tail -n +25 src/wink-porter2-stemmer.js > tmp/wink-porter2-stemmer.txt

# Join the two together
cat tmp/readme.txt tmp/wink-porter2-stemmer.txt > tmp/wink-porter2-stemmer.js

# Generate docs
./node_modules/.bin/docker -i tmp -o doc --css doc_extras/doc.css --js doc_extras/notebook.js --sidebar false

# Clean up
rm -rf tmp
