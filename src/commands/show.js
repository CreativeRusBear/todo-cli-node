const {Command} = require('@oclif/command')
const chalk = require('chalk')
const {Todo} = require('../db')

class ShowCommand extends Command {
  async run() {
    const res = await Todo.sortBy('id').value()
    res.forEach(({task, done}) => {
      this.log(`${done ? chalk.cyan('DONE') : chalk.redBright('NOT DONE')} : ${chalk.bgGreen(task)}`)
    })
  }
}

ShowCommand.description = `Shows existing tasks
...
Show all the tasks sorted by their ids`

module.exports = {
  ShowCommand,
}
