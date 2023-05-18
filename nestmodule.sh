#!/bin/bash

# BEFORE EXECUTE RUN
# chmod u+x nestmodule.sh
# RUN FROM THE PROJECT ROOT FOLDER
# HOW TO RUN
# ./nestmodule <MODULE_NAME>

name=$1
capitalized="$(tr '[:lower:]' '[:upper:]' <<<${name:0:1})${name:1}"

mkfile() { mkdir -p -- "$1" && touch -- "$1"/"$2"; }

# OPTIONAL CREATE MODULE FUNCTION
function mkmodule() {
  echo "import { Module } from '@nestjs/common';" >>$name/$name.module.ts
  echo "@Module({})" >>$name/$name.module.ts
  echo "export class ${capitalized}Module {}" >>$name/$name.module.ts
}

cd "src" && mkdir -p -- $name && mkfile $name/controller index.ts && mkfile $name/services index.ts && mkfile $name/repositories index.ts && nest g mo $name --no-spec
