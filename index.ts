
import inquirer from "inquirer";
import generate from './src/cli'
import { answerType } from './src/interface'

const promptList = [
    {
        type: 'confirm',
        message: '是否是Vue3项目？', // Vue3项目需要把package.josn中的type: module删除
        name: 'vue3'
    },
    {
        type: 'checkbox',
        message: '选择要安装的插件（默认全选）',
        name: 'plugins',
        choices: [
            {
                name: 'eslint注册',
                value: 'eslint',
                checked: true,
            },
            {
                name: 'husky注册',
                value: 'husky',
                checked: true
            },
            {
                name: 'commitlint注册',
                value: 'commitlint',
                checked: true
            }, 
            {
                name: 'vscode格式化注册',
                value: 'vscode',
                checked: true
            }
        ]
    }
]

const question = async() => {
    // 运行时请使用 npm run serve, 避免使用nodemon, 会导致 arrow key press 无效： https: // github.com/SBoudrias/Inquirer.js/issues/844#issuecomment-571412210
    const answers: answerType = await inquirer.prompt(promptList)
    generate(answers)
}

question()