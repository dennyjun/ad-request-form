# http://webdriver.io/api.html
describe 'Test Index', () ->
    describe 'Check Title', () ->
        it 'should see the correct title', () ->
            browser.url 'http://localhost:3000'
            title = browser.getTitle()
            title.should.be.equal 'ad-request-form'

    describe 'Check Body', () ->
        it 'should see the body', () ->
            browser.url 'http://localhost:3000'
            result = browser.element('body').state || 'success'
            result.should.not.be.equal 'failure'