import React, { useState } from 'react';
import Food from './food';
import axios from 'axios';
import './picture.css'

export default function PictureMatch() {
  const [foodData, setFoodData] = useState(null);


  function search(e) {
    localStorage.isloading = true
    e.preventDefault()
//获取图片文件，图片类型，图片大小
    const file = e.target.files[0]
    const type = file.type
    const size = file.size
    const regularType = ['image/png', 'image/jpg', 'image/jpeg']
//图片类型限制
    if (regularType.indexOf(type.toLowerCase()) === -1) {
    // Toast.fail('Only supports PNG images!')
    return false
    }
//图片大小限制
    if (size && size > 5242880) {
    // 5 * 1024 * 1024，size的单位是字节
    // Toast.fail('The image size should less than 5M!')
    return false
    }
//图片文件转成base64格式
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
    // setImgPreviewUrl(reader.result)
    console.log(reader);
    localStorage.picture = reader.result
    //Base64转换成二进制
    const dataURItoBlob=(dataURI)=> {
        const byteString = atob(dataURI.split(',')[1])
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        const ab = new ArrayBuffer(byteString.length)
        const ia = new Uint8Array(ab)
        for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
        }
        return new Blob([ab], { type: mimeString })
    }
    const blob = dataURItoBlob(reader.result)
    // const blobFile = new File([blob], 'avatar', { type: blob.type })

    const form = new FormData();
    form.append("file" , blob);

    const options = {
    method: 'POST',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze',
    headers: {
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ca34833afamsh5ac992bc1103a7fp14ff01jsne781a4ca7f2a'
    },
    data: form
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        setFoodData(response.data);
        localStorage.isloading = false
    }).catch(function (error) {
        console.error(error);
    });
}
}

  return  <div>
            {/* First Line */}
            <div className="user-box">
              <div className="discount card" style={{'--delay': '.4s'}}>
                <section className='controls'>
                  {/* <input type="number" placeholder='Calories (e.g 2000)' onChange={handleChange} /> */}
                  {/* <input onKeyUp={this.handleKeyUp} ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp; */}
                        {/* <input type="file" id = "curImg"/>
                        <button type = "submit" onClick={this.search}>Search</button> */}
                         <input
                            className='select-img-input'
                            onChange={(e) => search(e)}
                            type='file'
                            name='fileSelect'
                            accept='image/*'
                        />
                </section>
                {/* <button onClick={getMealData}>Get Daily Meal Plan</button> */}
                
                {foodData && <Food foodData={foodData} />}
              </div> 
            </div>
          </div>
}
      
    