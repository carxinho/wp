
module.exports = {  
    entry: './src/app.js',  //入口文件
    output: {  //输出文件路径设置
        path: __dirname,  
        filename: './bin/app.bundle.js',  
    },  
    module: {  
        loaders: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            loader: 'babel-loader'  
        }]  
    }  
} 