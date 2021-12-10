import { marked } from 'marked'

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}


const fileRegex = /\.md$/

export function md() {
    return {
        name: 'transform-file',

        transform(src, id) {
            if (fileRegex.test(id)) {
                return {
                    code: mdToJs(src),
                    map: null // 如果可行将提供 source map
                }
            }
        }
    }
}