describe 'Test Company Controller', () ->
    before (done) ->
        global.request = require 'supertest'
        path = require 'path'
        global.server = require path.normalize '../../../server/server'
        done()

    describe 'GET /companies', () ->
        it 'should fail without access token', () ->
          request server
            .get '/companies'
            .expect 500

    after (done) ->
        done()