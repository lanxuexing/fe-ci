// Grunt的入口文件，用于定义一些需要Grunt自动执行的任务
// 需要导出一个函数，此函数接受一个形参，内部提供一些创建任务时可以用的API

module.exports = grunt => {
  grunt.registerTask('foo', () => {
    console.log('Hello Grunt, Foo🔥')
  })

  grunt.registerTask('bar', 'foo task desc', () => {
    console.log('Hello Grunt!, this is foo task desc🍐')
  })

  // 默认任务，运行：yarn grunt 命令的时候自动执行此任务
  grunt.registerTask('default', () => {
    console.log('Hello Default Grunt~')
  })

  // 自动映射任务，在第二个参数需要一个数组，数组里是每一个任务名称
  grunt.registerTask('default', ['foo', 'bar'])

  // 异步任务，必须使用普通函数，必须调用done
  grunt.registerTask('async-task', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('Grunt Async Task🌲')
      done()
    }, 1000);
  })

}