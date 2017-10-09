import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from "../shared/routes"

import express from 'express'
const app = express()

import "isomorphic-fetch"

import App from '../shared/app.js'
import serialize from 'serialize-javascript'

app.use( express.static('public') )

app.get('*', (req, res) => {
			
	var context = [{
		title: 'Logro desbloqueado'
	}]
			
	var htmlBody = renderToString(
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);

	res.send(`<html>
			<head>
				<title>Server Side Rendering</title>
				<link rel="stylesheet" href="/css/main.css"
				
			</head>
			<body>
				<div id="root">${htmlBody}</div>
				<script src="/bundle.js"></script>
				<script>window.__INITIAL_STATE__ = ${JSON.stringify(context)}</script>
			</body>
		</html>`);
})

var PORT = 3000;
app.listen(PORT, () => {
	console.log('http://localhost:' + PORT);
})

//${store.getState().title}