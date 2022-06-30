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

- / : Home of the API, with an example and a short description.
- /api/images : Return an error (Input file is missing : please enter a valid filename !)
- /api/images?filename=encenadaport : Return an error (Please enter a valid number for height and width)
- /api/images?filename={FILENAME}&width={WIDTH}&height={HEIGHT}
