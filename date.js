const getCurrentGmtDate = () => new Date().toGMTString();

 

export default getCurrentGmtDate;
import getDateString from './date.js';

 

document

    .querySelector('.js-content')

    .innerHTML = `It's ${ getDateString() }`;

    output: {

        filename: 'bundle.js',
    
        path: path.resolve(__dirname, 'dist'),
    
        publicPath: 'dist/'
    
      },
