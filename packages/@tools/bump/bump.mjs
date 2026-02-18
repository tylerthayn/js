#!/usr/bin/env node

import "@js/core"
import { Command } from "commander";

let program = new Command();

program
	.name('bump')
	.description('bump pkg versions')
	.version('0.1.0')

program.option('--major', 'major version', false)
program.option('--minor', 'minor version', false)
program.option('--dev', 'dev version', true)


program.parse()

let options = program.opts()

log(import.meta.filename)
logj(options)

