# base64uri-cli

A simple CLI to encode a file as base64, and copy it as a data URI to the clipboard.

## Installation

1. First install [Node and npm](http://nodejs.org/)
2. From the command line run `npm install -g base64uri-cli`

## Usage

From the command line run `base64uri-cli path/to/file.png`, the encoded data URI should 
then be copied to your clipboard.

By default a data URI is returned, as this is what I wrote the CLI for.
If you want the raw base64 string pass an optional -raw parameter i.e. `base64uri-cli path/to/file.png -raw`

## Feedback

This is my first Node project and my first CLI so constructive criticism is very much welcome.