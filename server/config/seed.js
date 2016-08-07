/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Blog from '../api/blog/blog.model';

Blog.find({}).remove()
  .then(() => {
    Blog.create({
      title: 'Development Tools',
      teaser: {
            description: 'A little bit about development tools',
            img: 'assets/images/devtools.png',
      },
      category: 'Category 1',
      author: 'Ruben Yeghikyan',
      article: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.',
      active: true
    }, {
      title: 'Server and Client integration',
      teaser: {
        description: 'About the server and client integration',
        img: 'assets/images/servernclient.png',
      },
      category: 'Category 1',
      author: 'Ruben Yeghikyan',
      article: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.',
      active: true
    }, {
      title: 'Smart Build System',
      teaser: {
        description: 'What is "Smart Build System" and why it\'s amazing',
        img: 'assets/images/smart_build.png',
      },
      category: 'Category 1',
      author: 'Ruben Yeghikyan',
      article: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html',
      active: true
    }, {
      title: 'Modular Structure',
      teaser: {
        description: 'This post is about modular structure',
        img: 'assets/images/modular.jpg',
      },
      category: 'Category 1',
      author: 'Ruben Yeghikyan',
      article: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability',
      active: true
    }, {
      title: 'Optimized Build',
      teaser: {
        description: 'Why build optimization is important',
        img: 'assets/images/build.png',
      },
      category: 'Category 2',
      author: 'Someone else',
      article: 'Build process packs up your templates as a single JavaScript ' +
          'payload, minifies your scripts/css/images, and rewrites asset ' +
          'names for caching.',
      active: true
    }, {
      title: 'Deployment Ready',
      teaser: {
        description: 'Teaser description',
        img: 'assets/images/deployment.png',
      },
      category: 'Category 2',
      author: 'Ruben Yeghikyan',
      article: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
          'and openshift subgenerators',
      active: true
    });
  });
