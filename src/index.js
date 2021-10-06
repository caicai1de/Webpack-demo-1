import x from './x.js'
import png from './assets/1.png'

const div = document.getElementById('app');
div.innerHTML = `
<img src='${png}'>`

// 懒加载
const button = document.createElement('button')
button.innerHTML = 'Lazy load'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then(
        (module) => {
            const fn = module.default
            fn()
        }, () => { '模块加载错误' }
    )
}
div.appendChild(button)