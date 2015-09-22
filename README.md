# staticsite-starterkit2
Starter Kit for a Simple Website Development.

## Features

- Compile HTML files from Jade templates.
- Prettify HTML formats.
- Compile SCSS files to CSS (Using libsass).
- Include a reset CSS automatically.
- Transform latest CSS syntaxes to compatible ones(Using [cssnext](http://cssnext.io/)).
- Enbed inline souce maps in CSS.
- Run Browser-Sync when compiling files.

## Requirement

- node.js
- "Editor Config" Package if using Sublime Text.

## Installation

Install required packages.

```
$ npm i
```

## Usage

Run watching tasks with a command with...

```
$ gulp
```

or

```
$ npm start
```

## Option

[cssnext functions](http://cssnext.io/features/) are automatically adopted depending on browser options.  
So, Change the setting in gulpfile.js for your project's requiement.

```
browsers: 'last 2 versions'
```

More specific Browserslist queries are [here](https://github.com/ai/browserslist#queries).
