var express = require('express');
var path = require('path');
// var nun = require('nunjucks');


const app = express()
const port = process.env.PORT || 52524;

// app.use(express.static('public'))

app.use(express.static('public'))
app.set('strict routing', true);

// nun.configure('public', {
//   autoescape: true,
//   express: app
// });

const baseTitle = 'DC Tooling'

let routes = [
  { path: '/', title: 'Home', view: 'home' },
  { path: '/eoat', title: 'End of Arm Tooling', view: 'eoat' },
  { path: '/safety-guarding', title: 'Safety Guarding', view: 'safety-guarding' },
  { path: '/diverting-and-separation', title: 'Safety', view: 'diverting-and-separation' },
  { path: '/fixtures-and-testing', title: 'Fixtures and Testing Equipment', view: 'fixtures-and-testing' },
  { path: '/automated-machines', title: 'Automated Machines', view: 'automated-machines' },
  { path: '/contact-us', title: 'Contact Us', view: 'contact-us' },
  { path: '/about-us', title: 'About Us', view: 'about_us' },
  { path: '/gallery', title: 'Gallery', view: 'gallery' }
]


for (let route of routes) {
  app.get(route.path, (req, res) => {
    console.log('Path is: ' + route.path)
    let fileLocation = path.join(__dirname, '../public/' + route.view + '.html')
    console.log("File location: " + fileLocation)
    return res.sendFile(fileLocation);
  })
}


app.listen(port);