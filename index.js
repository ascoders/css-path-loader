module.exports = function (source, map) {
    this.cacheable && this.cacheable()
    var namespace = this.resourcePath.replace(process.cwd() + '/', '').replace(/\.(less|scss)/, '')

    var nameArray = namespace.split('/')
    nameArray.pop()
    nameArray.shift()
    var nameStr = nameArray.join('-')

    if (nameStr) {
        source = '.' + nameStr + '{' + source + '}'
    }

    this.callback(null, source, map)
}
