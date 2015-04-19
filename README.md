# IE base64 protector
This task duplicates styles in a stylesheet, appends a custom selector and adds an ignore comment flag for [grunt-image-embed](https://github.com/ehynds/grunt-image-embed).

Created by Dean James (https://github.com/xurion)

## Getting Started

Install this plugin with the command:

```js
npm install https://github.com/xurion/ie-base64-protector/tarball/0.3.4
```

Next, add this line to your project's grunt file:

```js
grunt.loadNpmTasks("ie-base64-protector");
```

Lastly, add configuration settings to your grunt.js file (see below).

## Documentation

This task has an object of files with key and value defined as prefix selector and file respectively. The file defined is edited directly and will be made to output to a destination later. It is recommended to use grunt copy or cssmin before running protector against a file.

An example configuration looks like this:

```js
grunt.initConfig({
    'ieBase64Protector': {
        files: {
            '.lt-ie8': 'dist/css/demo.css'
        }
    }
});
```

### Example

If you have a stylesheet with the following CSS:

```css
body {
    background: url(image.gif);
}
```

Running protector against this file (with the above example options) will change it to the following:

```css
body {
    background: url(image.gif);
}
.lt-ie8 body {
    background: url(image.gif); /*ImageEmbed:skip*/
}
```

Running [grunt-image-embed](https://github.com/ehynds/grunt-image-embed) against this file will now base64 encode the image, and leave the IE protected image:

```css
body {
    background: url(data:image/gif;base64,R0lGODlhAQABAPcAAMzM...zJaWlgAAAAAAAAAAAAA==);
}
.lt-ie8 body {
    background: url(image.gif); /*ImageEmbed:skip*/
}
```

Note: You have to have a mechanism to add the correct class to the html tag. This is what I use:<br>

&lt;!--[if lt IE 7]&gt;&lt;html class="lt-ie9 lt-ie8 lt-ie7" lang="en"&gt;&lt;![endif]--&gt;<br>
&lt;!--[if IE 7]&gt;&lt;html class="lt-ie9 lt-ie8" lang="en"&gt;&lt;![endif]--&gt;<br>
&lt;!--[if IE 8]&gt;&lt;html class="lt-ie9" lang="en"&gt;&lt;![endif]--&gt;<br>
&lt;!--[if gt IE 8]&gt;&lt;!--&gt;&lt;html&gt;&lt;!--&lt;![endif]--&gt;


## License

Licensed under the MIT License.