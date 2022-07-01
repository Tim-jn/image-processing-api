# Image Processing API

## Description

This API is the first project of Udacity's Full Stack Javascript Developer Nanodegree program.
It resizes and saves images to user specifications when visiting a URL.

Here is a list of available filenames : encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica

## Commands

- Install : `npm install `
- Build : `npm run build `
- Run tests : `npm run test `
- Start server : `npm run start `

## Endpoints

- http://localhost:8000/ : Home of the API, with an example and a short description.
- http://localhost:8000/api/images : Returns an error 400 (Input file is missing : please enter a valid filename !)
- http://localhost:8000/api/images?filename=encenadaport : Returns an error 404 (Please enter a valid number for height and width)
- http://localhost:8000/api/images?filename=encenadaport&width=250&height=250 : Returns status 200 and the encenadaport image resized to 250x250.


