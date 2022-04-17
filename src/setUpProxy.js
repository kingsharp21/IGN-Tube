const{createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app=>{
    app.use(
        createProxyMiddleware('/127.0. 0.1',
        {
            target:'https://ign-apis.herokuapp.com/',
            changeOrigin:true
        })
    )   
}