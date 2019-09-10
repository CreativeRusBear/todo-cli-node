todo-cli-node
=============

todo cli application

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli-node.svg)](https://npmjs.org/package/todo-cli-node)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli-node.svg)](https://npmjs.org/package/todo-cli-node)
[![License](https://img.shields.io/npm/l/todo-cli-node.svg)](https://github.com/CreativeRusBear/todo-cli-node/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo-cli-node
$ todo-cli-node COMMAND
running command...
$ todo-cli-node (-v|--version|version)
todo-cli-node/1.0.0 win32-x64 node-v10.16.3
$ todo-cli-node --help [COMMAND]
USAGE
  $ todo-cli-node COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo-cli-node add`](#todo-cli-node-add)
* [`todo-cli-node done`](#todo-cli-node-done)
* [`todo-cli-node help [COMMAND]`](#todo-cli-node-help-command)
* [`todo-cli-node remove`](#todo-cli-node-remove)
* [`todo-cli-node show`](#todo-cli-node-show)

## `todo-cli-node add`

Adds a new todo

```
USAGE
  $ todo-cli-node add

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
  Adds a new todo to the exiting list
```

_See code: [src\commands\add.js](https://github.com/CreativeRusBear/todo-cli-node/blob/v1.0.0/src\commands\add.js)_

## `todo-cli-node done`

Marks a task as done

```
USAGE
  $ todo-cli-node done

OPTIONS
  -n, --id=id  task id

DESCRIPTION
  ...
  Marks a task as done
```

_See code: [src\commands\done.js](https://github.com/CreativeRusBear/todo-cli-node/blob/v1.0.0/src\commands\done.js)_

## `todo-cli-node help [COMMAND]`

display help for todo-cli-node

```
USAGE
  $ todo-cli-node help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `todo-cli-node remove`

Removes a task by id

```
USAGE
  $ todo-cli-node remove

OPTIONS
  -n, --id=id  (required) task id

DESCRIPTION
  ...
  Removes a task permanently from db by id
```

_See code: [src\commands\remove.js](https://github.com/CreativeRusBear/todo-cli-node/blob/v1.0.0/src\commands\remove.js)_

## `todo-cli-node show`

Shows existing tasks

```
USAGE
  $ todo-cli-node show

DESCRIPTION
  ...
  Show all the tasks sorted by their ids
```

_See code: [src\commands\show.js](https://github.com/CreativeRusBear/todo-cli-node/blob/v1.0.0/src\commands\show.js)_
<!-- commandsstop -->
