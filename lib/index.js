#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var Rx = require('rx')
var inquirer = require('inquirer')
var questions = require('./questions/')
var post = require('./post')
var prompts = new Rx.Subject()
var npmDebugLog = path.join(process.cwd(), 'npm-debug.log')
var answers = []
var step = 0

function onEachAnswer (response) {
  step += 1
  answers[response.name] = response.answer

  if (response.name === 'reasons' && response.answer.indexOf('Other') === -1) {
    answers.other = false
    step += 1
  } else if (response.name === 'reproduce' && fs.existsSync(npmDebugLog) === false) {
    answers.log = false
    step += 1
  } else if (response.name === 'log') {
    answers.log = fs.readFileSync(npmDebugLog, 'utf8')
  }

  if (step === questions.length) {
    prompts.onCompleted()
  } else {
    prompts.onNext(questions[step])
  }
}

function onError (error) {
  console.error(error)
}

function onComplete () {
  post(answers)
}

inquirer.prompt(prompts).ui.process.subscribe(
  onEachAnswer,
  onError,
  onComplete
)

prompts.onNext(questions[step])
