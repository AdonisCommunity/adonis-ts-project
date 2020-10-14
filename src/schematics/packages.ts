/*
 * adonis-ts-boilerplate
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { CliState } from '../contracts'

export const packages: {
	[K in CliState['boilerplate']]: {
		[pkg: string]: { version: string }
	}
} = {
	web: {
		'@adonisjs/core': {
			version: '^5.0.2-beta-rc',
		},
		'@adonisjs/repl': {
			version: '^1.0.0',
		},
		'@adonisjs/session': {
			version: '^4.0.0',
		},
		'@adonisjs/view': {
			version: '^3.0.0',
		},
	},
	api: {
		'@adonisjs/core': {
			version: '^5.0.2-beta-rc',
		},
		'@adonisjs/repl': {
			version: '^1.0.0',
		},
	},
}
