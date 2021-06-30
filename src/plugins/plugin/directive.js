function addWaterMarker(str, parentNode, font, textColor) {
    // 水印文字，父元素，字体，文字颜色
    var can = document.createElement('canvas')
    parentNode.appendChild(can)
    can.width = 200
    can.height = 150
    can.style.display = 'none'
    var cans = can.getContext('2d')
    cans.rotate((-20 * Math.PI) / 180)
    cans.font = font || '16px Microsoft JhengHei'
    cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
    cans.textAlign = 'left'
    cans.textBaseline = 'Middle'
    cans.fillText(str, can.width / 10, can.height / 2)
    parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}
export default {
    name: 'Directive',
    entity: [{
            name: 'copy',
            entity: {
                bind(el, { value }) {
                    el.$value = value
                    el.handler = () => {
                            if (!el.$value) {
                                return
                            }
                            // 动态创建 textarea 标签
                            const textarea = document.createElement('textarea')
                                // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
                            textarea.readOnly = 'readonly'
                            textarea.style.position = 'absolute'
                            textarea.style.left = '-9999px'
                                // 将要 copy 的值赋给 textarea 标签的 value 属性
                            textarea.value = el.$value
                                // 将 textarea 插入到 body 中
                            document.body.appendChild(textarea)
                                // 选中值并复制
                            textarea.select()
                            const result = document.execCommand('Copy')
                            if (result) {
                                console.log('复制成功') // 可根据项目UI仔细设计
                            }
                            document.body.removeChild(textarea)
                        }
                        // 绑定点击事件，就是所谓的一键 copy 啦
                    el.addEventListener('click', el.handler)
                },
                // 当传进来的值更新的时候触发
                componentUpdated(el, { value }) {
                    el.$value = value
                },
                // 指令与元素解绑的时候，移除事件绑定
                unbind(el) {
                    el.removeEventListener('click', el.handler)
                },
            }
        },
        {
            name: 'waterMarker',
            entity: {
                bind: (el, binding) => {
                    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
                },
            }
        }

    ]

}