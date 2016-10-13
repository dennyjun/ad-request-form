# http://webdriver.io/api.html
describe 'Test Index', () ->
    before (done) ->
        require '../../server/server'
        chai = require 'chai'
        global.expect = chai.expect
        chai.Should()
        global.client = require 'webdriverio'
        capabilities = 
            browserName: 'phantomjs',
            platform: 'LINUX'
        global.options = desiredCapabilities: capabilities
        global.selenium = require 'selenium-standalone'
        selenium.install
            logger: (message) -> console.log message, 
            (err) ->
                if err then return done err
                selenium.start (err, process) -> 
                    if err then return done err
                    selenium.process = process
                    done()

    describe 'Check Title', () ->
        it 'should see the correct title', () ->
            client
                .remote options
                .init()
                .url 'http://localhost:3000'
                .getTitle().then (title) ->
                    expect(title).to.have.string 'ad-request-form'
                .end()

    describe 'Check Body', () ->
        it 'should see the body', () ->
            client
                .remote options
                .init()
                .url 'http://localhost:3000'
                .element('body').then (result) ->
                    expect(result.state).to.equal 'success'
                .end()

    after (done) ->
        selenium.process.kill()
        done()