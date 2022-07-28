import { fork } from 'child_process'

const forked = fork('child.js')

export const childRouter = () => {
    console.log('mensaje del child')
}