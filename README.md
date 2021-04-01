# Curriculum Vitae

So it seems like my personal website is not enough for some entities,
so here I managed to compile on a condensed format the whole thing
that companies care about. Hopefully it will satisfy their needs.

I was sent an Word document that I had to maintain the format. Since I don't have
the Office suite and I dread working with any office software, I did the only
sensible thing I could to, which is to put all the data on a YAML file and
recreate the document as an HTML page that can be downloaded as PDF.

I also added an open source section because curiously "professional experience" only
cared about companies I worked no but said nothing about open source projects, personal
projects or private clients from freelance work. So the format had to be extended.

The CV for Akvelon should be accessible at [cv.zequez.space/akvelon](https://cv.zequez.space/akvelon)

But then I realized that since I already had all the data now I could make one
with my own style, so the main CV lives here on the root of the domain: [cv.zequez.space](https://cv.zequez.space)

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
