/**
 *
 * @param {any} api
 * @param {[{script:string; name:string; options?:any}]} plugins
 */
module.exports = async function loadPlugins(api, options = {}) {
  const plugins = options.plugins
  if (Array.isArray(plugins) && plugins.length) {
    for (const plugin of plugins) {
      await require(plugin.script).init(api, options)
    }
    return true
  }
  return false
}
