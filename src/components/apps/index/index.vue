<template>
    <div class="box">
        <!--<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>-->

        <div class="goods-editor">
            <!-- 工具栏容器 -->
            <div id="toolbar-container"></div>

            <!-- 编辑器容器 -->
            <div id="editor">
                <!-- <p>This is the initial editor content.</p> -->
            </div>
        </div>
    </div>
</template>

<script>
    import CKEditor from '@ckeditor/ckeditor5-build-classic';
    //清除样式
    //import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
    //文本转换
    //import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
    import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn.js'


    // Plugins to include in the build.
    // ClassicEditor.builtinPlugins = [
    //     AutoformatPlugin,
    // ];

    class UploadAdapter {
        constructor(loader) {
            this.loader = loader
        }

        upload() {  //重置上传路径
            return new Promise((resolve, reject) => {
                var fileName = 'goods' + this.loader.file.lastModified
                client().put(fileName, this.loader.file).then(result => {
                    resolve({
                        default: result.url
                    })
                }).catch(err => {
                    console.log(err)
                })
            })
        }

        abort() {
        }
    }

    export default {
        data() {
            return {
                editor: null, // 编辑器实例
            }
        },
        mounted() {
            this.initCKEditor()
        },
        methods: {
            initCKEditor() {
                //初始化编辑器
                CKEditor.create(document.querySelector('#editor'), {
                    language: 'zh-cn',  // 中文
                    height: 400,
                    ckfinder: {
                        'uploaded': 1, 'url': '/'
                        // 后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
                    }
                }).then(editor => {
                    const toolbarContainer = document.querySelector('#toolbar-container')
                    toolbarContainer.appendChild(editor.ui.view.toolbar.element)
                    // 加载了适配器
                    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                        return new UploadAdapter(loader)
                    }
                    this.editor = editor // 将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
                }).catch(error => {
                    console.error(error)
                })
            },
        }
    }
</script>

<style scoped src="./style.css"></style>
