# Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`

*Remember that we have a pre-push hook with steps that analyzes and prevents mistakes.*

**After your pull request is merged**, you can safely delete your branch.

### Folders and Files

```sh
.
├── css
│   └── main.csas
├── dist
│   ├── Main.js
│   ├── Main.min.js
├── src
│   ├── Main.js
├── stories
│   └── Main.js
├── storybook
│   ├── config.js
│   └── webpack.config.js
├── tests
│   ├── helpers
│   │   └── setup.js
│   └── specs
│       ├── Main.spec.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .npmignore
├── .travis.yml
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
└── package.json
```

### How to Develop with Storybook

Create your [storybook stories](https://github.com/kadirahq/react-storybook/blob/master/docs/writing_stories.md) on `stories` folder. If you want to create another story file, remember to load on `.storybook/config.js`. With all stories, just run `npm run storybook` to open your isolated environment.

If you want to know more about storybook, [see this link](https://github.com/kadirahq/react-storybook).

### Code Standarts

We follow the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

This project uses [eslint](http://eslint.org/) and [.editorconfig](http://editorconfig.org/) is defined to have indent_size of **4 spaces**.

This project also uses [Husky](https://github.com/typicode/husky) to prevent push messy and wrong code. Please, don't be stupid, fix all errors before push =D

### Tasks

* `npm run build`: build component to external use.
* `npm run pub`: build and publish the component to npm.
* `npm run storybook`: launch storybook to develop your component.
* `npm run build-storybook`: build an static storybook to `.out` folder.
* `npm run deploy-storybook`: build and deploy a storybook with component to gh-pages.
* `npm run test`: run all specs.
* `npm run test:tdd`: run all specs and watch.
* `npm run test:coverage`: run all specs and coverage.
* `npm run lint`: lint all files searching for errors.
* `npm run lint:fix`: fix some lint errors.


### [<-- Back](https://github.com/lyef/lyef-pokemon)
