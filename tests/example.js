describe ('First Steps with webdriverIO', ()=> {

    it('Load example website', ()=>{
        browser.url('https://ca.yahoo.com/') 
        
        expect(browser).toHaveUrl('http://example.com/');
       
    })
    
    
    it('Load example website:postive', ()=>{
        // browser.url('http://www.example.com') 
        browser.url('https://ca.yahoo.com/') 
        
        expect(browser).toHaveUrl('https://ca.yahoo.com/');
       
    })
/*     it("Load webdriverIO website", ()=>{
        browser.url('https://webdriver.io')
        browser.pause(5000)
    }) */
})