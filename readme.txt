Instalaciones extra:
-> yarn add prop-types
-> yarn add --dev jest
"test": "jest --watchAll"
-> yarn add -D @types/jest (intelisense en VSCode)
-> yarn add --dev babel-jest @babel/core @babel/preset-env

config de babel.config.json : {"presets": [["@babel/preset-env",{"targets": {"node":"current"}}]]}