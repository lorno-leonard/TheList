TheList
=======

### First Time:
  `npm install && grunt dev`

### Subsquent times
  `grunt dev`

### Deploying
	Remove these lines in the `<head>` tag of index.html
	```
	<!-- build:css css/compiled/compiled.min.css -->
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.smoothness.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<!-- /build -->
	```
	and uncomment the this line
	`<!-- <link rel="stylesheet" type="text/css" href="css/compiled/compiled.min.css"> -->`
