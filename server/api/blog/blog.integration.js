'use strict';

var app = require('../..');
import request from 'supertest';

var newPost;

describe('Blog API:', function() {

  describe('GET /api/blog', function() {
    var blogs;

    beforeEach(function(done) {
      request(app)
        .get('/api/blog')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          blogs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      blogs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/blog', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/blog')
        .send({
          title: 'New Post',
          teaser: {
            description: 'Teaser description',
            img: 'assets/images/yeoman.png',
          },
          category: 'Category 1',
          author: 'Ruben Yeghikyan',
          article: 'This is the brand new post!!!',
          active: true
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPost = res.body;
          done();
        });
    });

    it('should respond with the newly created post', function() {
        newPost.title.should.equal('New Post');
        newPost.teaser.description.should.equal('Teaser description');
        newPost.teaser.img.should.equal('assets/images/yeoman.png');
        newPost.category.should.equal('Category 1');
        newPost.author.should.equal('Ruben Yeghikyan');
        newPost.article.should.equal('This is the brand new post!!!');
        newPost.active.should.equal(true);
    });

  });

  describe('GET /api/blog/:id', function() {
    var post;

    beforeEach(function(done) {
      request(app)
        .get('/api/blog/' + newPost._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          post = res.body;
          done();
        });
    });

    afterEach(function() {
      post = {};
    });

    it('should respond with the requested post', function() {
        post.title.should.equal('New Post');
        post.teaser.description.should.equal('Teaser description');
        post.teaser.img.should.equal('assets/images/yeoman.png');
        post.category.should.equal('Category 1');
        post.author.should.equal('Ruben Yeghikyan');
        post.article.should.equal('This is the brand new post!!!');
        post.active.should.equal(true);
    });

  });

  describe('PUT /api/blog/:id', function() {
    var updatedPost;

    beforeEach(function(done) {
      request(app)
        .put('/api/blog/' + newPost._id)
        .send({
            title: 'Updated Post',
            teaser: {
              description: 'Updated Teaser description',
              img: 'assets/images/yeoman2.png',
            },
            category: 'Category 2',
            author: 'Steve Jobs',
            article: 'This is the updated post!!!',
            active: false
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPost = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPost = {};
    });

    it('should respond with the updated thing', function() {
        updatedPost.title.should.equal('Updated Post');
        updatedPost.teaser.description.should.equal('Updated Teaser description');
        updatedPost.teaser.img.should.equal('assets/images/yeoman2.png');
        updatedPost.category.should.equal('Category 2');
        updatedPost.author.should.equal('Steve Jobs');
        updatedPost.article.should.equal('This is the updated post!!!');
        updatedPost.active.should.equal(false);
    });

  });

  describe('DELETE /api/blog/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/blog/' + newPost._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when thing does not exist', function(done) {
      request(app)
        .delete('/api/blog/' + newPost._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
