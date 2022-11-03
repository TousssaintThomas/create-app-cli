#! /usr/bin/env node

const { program } = require('commander')

const list = require('./commands/list')
const speak = require('./commands/speak')

program
    .name('create-app')
    .version('1.0.0')

program
    .command('list')
    .description('List all the TODO task')
    .action(list)

program
    .command('speak')
    .description('Say hello to the user.')
    .action(speak)

program.parse()