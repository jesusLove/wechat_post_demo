import './style.css'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import * as FilePond from 'filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'

// 国际化
import zh_CN from 'filepond/locale/zh-cn'
FilePond.setOptions(zh_CN)

document.querySelector('#app').innerHTML = `
<input type="file" 
       id="filepond"
       class="filepond"
       name="filepond"
       accept="image/png, image/jpeg, image/gif"/>
`
const inputRef = document.getElementById('filepond')
FilePond.registerPlugin(
  	// encodes the file as base64 data
    FilePondPluginFileEncode,
	
    // validates files based on input type
    FilePondPluginFileValidateType,
    
    // corrects mobile image orientation
    FilePondPluginImageExifOrientation,
    
    // previews the image
    FilePondPluginImagePreview,
    
    // crops the image to a certain aspect ratio
    FilePondPluginImageCrop,
    
    // resizes the image to fit a certain size
    FilePondPluginImageResize,
    
    // applies crop and resize information on the client
    FilePondPluginImageTransform,

    FilePondPluginImageValidateSize
)

const pond = FilePond.create(inputRef, {
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 200,
  imageResizeTargetHeight: 200,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
})


