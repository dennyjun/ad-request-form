describe 'Test Company Controller', () ->
    before (done) ->
        global.server = require '../../../server/server'
        global.request = require 'supertest'
        done()

    describe 'GET /companies', () ->
        it 'should fail without access token', () ->
          request server
            .get '/companies'
            .expect 500

    after (done) ->
        done()