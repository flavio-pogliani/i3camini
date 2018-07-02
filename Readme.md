I3 Camini
=========
Code and scripts for the I3 Camini website.

The website is built into two stages:

  1. JavaScript and Styles are built using Bower, WebPack,
     and other frontend tools below.
  2. Hugo uses the above plus a custom theme and content to rended the site.

While Hugo can be used on Windows, other tools may not work.
As a result, JS and CSS are commited to this repository for Windows users.


Tools installation (Windows)
----------------------------
### Git

  * Windows installer: https://git-scm.com/download/
  * Tutorial: http://code.tutsplus.com/tutorials/git-on-windows-for-newbs--net-25847

Step one and two up to `Setup SSH Key with Hosted Git Repository` excluded.


### Hugo (https://github.com/gohugoio/hugo/releases/tag/v0.16)

  * Windows installer: https://github.com/spf13/hugo/releases
  * Tutorial: https://gohugo.io/tutorials/installing-on-windows/


Getting the code
----------------
The code is versioned using git and available on GitHub.com.


Build
-----
### Assets
```
make -C assets build
```

### Site
```
cd site && hugo
```

### Upload
```bash
aws --profile=trecamini-net s3 sync --delete out s3://origin.trecamini.net
```


Tools
-----

  * [Bower](http://webpack.github.io/)
  * [Git](https://git-scm.com/)
  * [Hugo](https://gohugo.io/)
  * [Make](https://www.gnu.org/software/make/)
  * [WebPack](http://webpack.github.io/)


Frameworks
----------

  * [Bootstrap](http://getbootstrap.com/)
  * [jQuery](https://jquery.com/)
