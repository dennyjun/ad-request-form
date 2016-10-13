describe 'Test App Component', () ->
    before (done) ->
        global.request = require 'supertest'
        global.server = require '../../server/server'
        done()

    describe 'GET /', () ->
        it 'should render ok', () ->
          request server
            .get '/'
            .expect 200

    after (done) ->
        done()