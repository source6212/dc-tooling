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

let underConstruction = false

let routes = [
  { path: '/', title: 'Home', view: (underConstruction ? "under_construction" : "home") },
  // { path: '/under_construction', title: 'Under Construction', view: 'under_construction' },
  // { path: '/equipment', title: 'Equipment & Tools', view: 'equipment' },
  // { path: '/safety', title: 'Safety', view: 'safety' },
  { path: '/automation', title: 'Automation', view: 'automation' },
  { path: '/contact-us', title: 'Contact Us', view: 'contact-us' },
  // { path: '/about-us', title: 'About Us', view: 'about-us' },
  // { path: '/gallery', title: 'Gallery', view: 'gallery' }
]


for (let route of routes) {
  app.get(route.path, (req, res) => {
    console.log('Path is: ' + route.path)
    let fileLocation = path.join(__dirname, '../public/' + route.view + '.html')
    console.log("File location: " + fileLocation)
    return res.sendFile(fileLocation);

    // return res.sendFile(path.join(__dirname, '../public/', route.view));
    // return res.render(route.view, { pageTitle: title, currentPath: route.path })
  })
}

app.listen(port, function() {
  // console.log("Server started at http://localhost:52524/")
});
