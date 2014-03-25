var fs = require('fs'),
	exec = require('child_process').exec

var commandTmpl = 'pico2wave -l "{{lang}}" -w {{file}} "{{text}}" && aplay {{file}}'

function getTmpFile() {
	var random = Math.random().toString(36).slice(2),
		path = '/tmp/' + random + '.wav'

	return (!fs.existsSync(path)) ? path : getTmpFile()
}

function say(text, lang, cb) {
	var file = getTmpFile(),
		command = commandTmpl.replace('{{lang}}', lang).replace('{{text}}', text).replace(/\{\{file\}\}/g, file)
	exec(command, function(err) {
		cb(err)
		fs.unlink(file)
	})
}

module.exports = exports = {say: say}