# Curriculum Vitae

So it seems like my personal website is not enough for some entities,
so here I managed to compile on a condensed format the whole thing
that companies care about. Hopefully it will satisfy their needs.

The CV lives here on the root of the domain: [cv.zequez.space](https://cv.zequez.space)

There is also a [raw version with minimal styling](https://cv.zequez.space/raw) and the full data visible for copy-pasting into a document or printing.


## Development

```
yarn dev
```

## Build

```
yarn build
```

## Deploy to Github Pages

From the root of the project:

```
git clone https://github.com/Zequez/cv-maker --branch gh-pages gh-pages
```

That will create a folder called "gh-pages" on the directory, which is
ignored by .gitignore.

Then whenever you want to build & deploy just run:

```
./deploy.sh
```

No need to mess with subtrees, and I don't need to commit the build to the
main branch.
